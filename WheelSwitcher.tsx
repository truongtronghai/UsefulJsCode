import { AnimatePresence, motion } from "motion/react";
import { MouseEvent, useState, useRef, useEffect } from "react";
import IndicatorKnob from "../IndicatorKnob";

export type DurationUnit =
    | "now"
    | "1d"
    | "1w"
    | "2w"
    | "1m"
    | "2m"
    | "3m"
    | "-1d"
    | "-1w"
    | "-2w"
    | "-1m"
    | "-2m"
    | "-3m";

type KnobSwitcherProps = {
    radius?: number;
    showKnotches?: boolean;
    totalDegreeOfRotation?: number;
    adjustmentAngle?: number;
    units?: string[];
    debug?: boolean;
    initialPosition?: DurationUnit;
    onSelect: (unit: DurationUnit) => void;
    dragable?: boolean;
    showNegativeUnits?: boolean;
};

const WheelSwitcher = ({
    radius = 23,
    showKnotches = false,
    totalDegreeOfRotation = 240,
    adjustmentAngle = 30,
    units = ["now", "1d", "1w", "2w", "1m", "2m", "3m"],
    debug = false,
    initialPosition = "now",
    onSelect,
    dragable = false,
    showNegativeUnits = false,
}: KnobSwitcherProps) => {
    const [position, setPosition] = useState(-1);
    const dialRef = useRef<HTMLDivElement>(null);
    const [knotchPoint, setKnotchPoint] = useState<{
        x: number;
        y: number;
    } | null>(null);
    // For debugging purposes. Draw red dot at (x,y)
    const [moveTo, setMoveTo] = useState<{
        x: number;
        y: number;
        degreeInRadians: number;
        color: string;
    }>({ x: 0, y: 0, degreeInRadians: 0, color: "rgba(0, 0, 0, 0.5)" });

    const [debugNormalizedAngle, setDebugNormalizedAngle] = useState(0);
    ////////////////////////////
    const [rotateTransformText, setRotateTransformText] = useState("");
    const draggingRef = useRef(false);

    const storedNearestPositionIndex = useRef(-1);

    const angleStep =
        totalDegreeOfRotation / (units.length > 1 ? units.length - 1 : 1);
    const radiusForLabels = radius + 19;
    const radiusForKnobs = radius + 7;
    const radiusInside = radius * 0.9;

    const MAX_ANGLE_ROTATION = 210;
    const MIN_ANGLE_ROTATION = -30;

    const angleDegreeForPosition: number[] = [];

    const getCoordinatesForPosition = (position: number) => {
        const angle = position * angleStep * (Math.PI / 180); // convert to radians

        return {
            x: radiusForKnobs * Math.cos(angle),
            y: -1 * radiusForKnobs * Math.sin(angle),
        };
    };

    const mapScreenCoordinatesToDialCoordinates = ({
        clientX,
        clientY,
    }: {
        clientX: number;
        clientY: number;
    }) => {
        const rect = dialRef.current!.getBoundingClientRect();

        const x = clientX - rect.left - rect.width / 2;
        const y = clientY - rect.top - rect.height / 2;

        return { x, y };
    };

    const buildTransformRotateText = (angle: number) => {
        return `rotate(${angle * -1}deg) translateX(${radiusInside - radius / 5}px)`;
    };

    const normalizeAngle = (angle: number) => {
        if (angle < 0) return (angle + 360) % 360;
        return angle % 360;
    };

    const convertRadiansToDegrees = (radians: number) => {
        return radians * (180 / Math.PI);
    };

    const findNearestPosition = (
        normalizedAngle: number,
        angleOfPositions: number[]
    ) => {
        setDebugNormalizedAngle(normalizedAngle); // For debugging purposes only

        // This function will store the nearest position index in storedNearestPositionIndex.current based on the angle passed in.
        if (
            normalizedAngle >= MAX_ANGLE_ROTATION &&
            normalizedAngle < normalizeAngle(MIN_ANGLE_ROTATION)
        ) {
            storedNearestPositionIndex.current = units.length - 1;
        }

        if (
            normalizedAngle >= normalizeAngle(MIN_ANGLE_ROTATION) &&
            normalizedAngle <= 360
        )
            if (storedNearestPositionIndex.current === -1)
                storedNearestPositionIndex.current = 0;

        // const deNormalizedAngle = deNormalizeAngle(normalizedAngle);

        let greaterThanAngle = angleOfPositions.findIndex(
            (angle) => normalizedAngle <= angle
        );

        if (greaterThanAngle === -1) greaterThanAngle = 0; // If not found, it means the angle is greater than all positions, so we wrap around to the first position.

        const smallerThanAngle =
            greaterThanAngle > 0 ? greaterThanAngle - 1 : 0;
        const tempAverage =
            (normalizeAngle(angleOfPositions[smallerThanAngle]) +
                normalizeAngle(angleOfPositions[greaterThanAngle])) /
            2;

        debug &&
            console.log(
                "Temp average and greaterThanAngle => ",
                tempAverage,
                greaterThanAngle
            );

        const tempPos =
            normalizedAngle < tempAverage ? smallerThanAngle : greaterThanAngle;

        debug && console.log("Temp pos => ", tempPos);

        storedNearestPositionIndex.current = tempPos;
    };

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        draggingRef.current = true;

        if (debug) {
            console.log("angleDegreeForPosition => ", angleDegreeForPosition);

            const { x, y } = mapScreenCoordinatesToDialCoordinates(e);
            const degreeInRadians = Math.atan2(-y, x);

            setMoveTo({
                x,
                y,
                degreeInRadians,
                color: "rgba(255, 0, 0, 0.5)",
            });
        }
    };

    const handleMouseUp = () => {
        draggingRef.current = false;

        if (storedNearestPositionIndex.current > -1) {
            setRotateTransformText(
                buildTransformRotateText(
                    angleDegreeForPosition[storedNearestPositionIndex.current]
                )
            );

            setPosition(storedNearestPositionIndex.current);
        }
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!draggingRef.current) return;

        const { x, y } = mapScreenCoordinatesToDialCoordinates(e);
        const degreeInRadians = Math.atan2(-y, x); // atan2 gives angle in radians between the positive x-axis and the point (x, y)
        const normalizedDegree = normalizeAngle(
            convertRadiansToDegrees(degreeInRadians)
        );

        // This line is extremely important to prevent the knob from jumping to DEAD range. If there is no this, we cannot calculate exact nearest position in findNearestPosition()
        if (
            normalizedDegree > MAX_ANGLE_ROTATION &&
            normalizedDegree < normalizeAngle(MIN_ANGLE_ROTATION)
        )
            return;

        findNearestPosition(normalizedDegree, angleDegreeForPosition);

        if (normalizedDegree <= MAX_ANGLE_ROTATION && normalizedDegree >= 0) {
            // Extremely important to fix bug in which pointer goes back to -30° or exceeds 210° because -30° == 330° after normalization
            setRotateTransformText(buildTransformRotateText(normalizedDegree));
        }
        // below is the case to fix bug in which when we drag pointer to range [-30, 0)
        const denormalizedDegree = normalizedDegree - 360;

        if (denormalizedDegree >= MIN_ANGLE_ROTATION && denormalizedDegree < 0)
            setRotateTransformText(
                buildTransformRotateText(denormalizedDegree)
            );
    };

    useEffect(() => {
        if (position === -1) return;
        const temp = getCoordinatesForPosition(position);

        setKnotchPoint(temp);
        onSelect(units[position] as DurationUnit);

        setRotateTransformText(
            buildTransformRotateText(position * angleStep - adjustmentAngle)
        );
    }, [position]);

    useEffect(() => {
        // Set initial position of the knob based on the initial state
        const initialPosIndex = units.findIndex(
            (unit) => unit === initialPosition
        );
        if (initialPosIndex !== -1) setPosition(initialPosIndex);

        const angle =
            (initialPosIndex !== -1 ? initialPosIndex : 0) * angleStep -
            adjustmentAngle * (Math.PI / 180); // convert to radians

        const { pointX, pointY }: { pointX: number; pointY: number } = {
            pointX: radiusForLabels * Math.cos(angle),
            pointY: -1 * radiusForLabels * Math.sin(angle),
        };

        setMoveTo((prev) => ({
            ...prev,
            x: pointX,
            y: pointY,
            degreeInRadians: angle,
            color: "rgba(0, 0, 0, 0.5)",
        }));
    }, []);

    return (
        <div
            ref={dialRef}
            style={{
                display: "grid",
                placeItems: "center",
                borderRadius: "100%",
                border: debug ? "1px solid #00ff00" : undefined,
                width: `${radiusForLabels * 2}px`,
                height: `${radiusForLabels * 2}px`,
                position: "relative",
            }}
            onMouseDown={dragable ? handleMouseDown : undefined}
            onMouseMove={dragable ? handleMouseMove : undefined}
            onMouseUp={dragable ? handleMouseUp : undefined}
        >
            {debug && (
                <div
                    style={{
                        top: "-20px",
                        left: 0,
                        color: "rgba(0, 255, 0, 0.5)",
                        position: "absolute",
                    }}
                >
                    {storedNearestPositionIndex.current} {" # "}
                    {debugNormalizedAngle.toFixed(2)}°
                </div>
            )}
            {/* Drawing CENTER point to debug */}
            {debug && (
                <div
                    style={{
                        transform: `translate(0px,0px)`,
                        width: "3px",
                        height: "3px",
                        borderRadius: "100%",
                        backgroundColor: "rgba(0, 255, 0, 0.5)",
                        position: "absolute",
                    }}
                ></div>
            )}

            {/* Drawing point to debug */}
            {debug && (
                <div
                    style={{
                        transform: `translate(${moveTo.x}px,${moveTo.y}px)`,
                        width: "3px",
                        height: "3px",
                        borderRadius: "100%",
                        backgroundColor: moveTo.color,
                        position: "absolute",
                    }}
                >
                    {`${moveTo.degreeInRadians.toFixed(2)}rad (${convertRadiansToDegrees(moveTo.degreeInRadians).toFixed(2)}° <==> ${normalizeAngle(convertRadiansToDegrees(moveTo.degreeInRadians)).toFixed(2)}°)`}
                </div>
            )}

            {units.map((unit, index) => {
                // Angle MUST be in radians
                // 1 degree = π / 180 radians
                const angle =
                    (index * angleStep - adjustmentAngle) * (Math.PI / 180);

                angleDegreeForPosition[index] =
                    index * angleStep - adjustmentAngle;

                const { pointX, pointY }: { pointX: number; pointY: number } = {
                    pointX: radiusForLabels * Math.cos(angle),
                    pointY: -1 * radiusForLabels * Math.sin(angle),
                };

                return (
                    <span
                        key={index}
                        style={{
                            position: "absolute",
                            transform: `translate(${pointX}px, ${pointY}px)`,
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "8px",
                            lineHeight: "10px",
                            color: "#B0B0B0",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setPosition(index);
                            storedNearestPositionIndex.current = index;
                        }}
                    >
                        {showNegativeUnits && unit !== "now"
                            ? `-${unit}`
                            : unit}
                        {debug && `|${index * angleStep - adjustmentAngle}°`}
                        {debug &&
                            `|${((index * angleStep - adjustmentAngle) * (Math.PI / 180)).toFixed(2)}rad`}
                    </span>
                );
            })}
            {/* the dial */}
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "100%",
                    width: `${radius * 2 + 5}px`,
                    height: `${radius * 2 + 5}px`,
                    background: "black",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "100%",
                        width: `${radius * 2}px`,
                        height: `${radius * 2}px`,
                        background: [
                            "radial-gradient(84.98% 101.05% at 7.43% 75.54%, #0E0E0E 0%, #222222 91.5%, #252525 100%)",
                        ].join(", "),
                        boxShadow: [
                            "inset 1.02183px 1.70304px 3.40609px rgba(0, 0, 0, 0.5)",
                            "inset -1.02183px -1.02183px 2.04365px rgba(255, 255, 255, 0.06)",
                        ].join(", "),
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            placeItems: "center",
                            borderRadius: "100%",
                            width: `${radiusInside * 2}px`,
                            height: `${radiusInside * 2}px`,
                            background: [
                                "linear-gradient(51.52deg, #1A1A1A 16.33%, #424242 84.52%)",
                            ].join(", "),
                        }}
                    >
                        {showKnotches &&
                            units.map((_, index) => {
                                const angle =
                                    (index * angleStep - adjustmentAngle) *
                                    (Math.PI / 180);

                                const {
                                    pointX,
                                    pointY,
                                }: { pointX: number; pointY: number } = {
                                    pointX: radiusForKnobs * Math.cos(angle),
                                    pointY:
                                        -1 * radiusForKnobs * Math.sin(angle),
                                };

                                return (
                                    <span
                                        key={index}
                                        style={{
                                            position: "absolute",
                                            transform: `translate(${pointX}px, ${pointY}px) rotate(${(index * angleStep - adjustmentAngle) * -1}deg)`,
                                        }}
                                    >
                                        <div
                                            className="h-[2px] w-[6px] rounded-e-full rounded-s-none bg-slate-500"
                                            style={{
                                                background:
                                                    "linear-gradient(-90deg, #C8A3FF 0%, #5B5178 100%)",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => {
                                                setPosition(index);
                                                storedNearestPositionIndex.current =
                                                    index;
                                            }}
                                        ></div>
                                    </span>
                                );
                            })}
                        <AnimatePresence>
                            {knotchPoint && (
                                <motion.div
                                    animate={{ transform: rotateTransformText }}
                                >
                                    <IndicatorKnob
                                        size={radius / 5}
                                        dragable={dragable}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WheelSwitcher;
