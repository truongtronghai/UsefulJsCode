import React from "react";

type GaugeItem = {
    score: number;
};

type BreachLikelihoodScaleProps = {
    width: number;
    height: number;
    type?: "semicircle" | "fullcircle";
    gap?: number; // degrees of gap between arc segments
    debug?: boolean;
    hasGradient?: boolean;
} & GaugeItem;

const ARC_SEGMENTS = [
    { from: 0, to: 25, color: "#52C41A" },
    { from: 25, to: 50, color: "#FAAD14" },
    { from: 50, to: 75, color: "#FA8C16" },
    { from: 75, to: 100, color: "#FF4D4F" },
];

const TICKS = [0, 25, 50, 75, 100];

// The gauge does not start at 0deg
// It starts at -180deg (left side of the semicircle)
const scoreToAngle = (score: number) => -180 + (score / 100) * 180;

const polarToCartesian = (
    cx: number,
    cy: number,
    radius: number,
    angle: number
) => {
    const radians = angle * (Math.PI / 180);
    return {
        x: cx + radius * Math.cos(radians),
        y: cy + radius * Math.sin(radians),
    };
};

const arcPath = (
    cx: number,
    cy: number,
    radius: number,
    startAngle: number,
    endAngle: number
) => {
    const start = polarToCartesian(cx, cy, radius, startAngle);
    const end = polarToCartesian(cx, cy, radius, endAngle);
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`;
};

const getScoreColor = (score: number) => {
    if (score <= 25) return "#52C41A";
    if (score <= 50) return "#FAAD14";
    if (score <= 75) return "#FA8C16";
    return "#FF4D4F";
};

const BreachLikelihoodScale: React.FC<BreachLikelihoodScaleProps> = ({
    score,
    width,
    height,
    type = "semicircle",
    gap = 2,
    debug = false,
    hasGradient = false,
}) => {
    const centerX = width / 2;
    const centerY =
        type === "semicircle"
            ? Math.min(width, height)
            : Math.min(width, height) / 2;
    const padding = 32;
    const arcRadius =
        type === "semicircle"
            ? Math.min(width, height) - padding
            : Math.min(width, height) / 2 - padding;
    const needleLength = arcRadius / 2;
    const needleRadius = arcRadius + 10;
    const needleTipSize = 2;

    const needleStartPoint1 = {
        x: centerX - needleTipSize / 2,
        y: padding * 0.7,
    };
    const needleStartPoint2 = {
        x: centerX + needleTipSize / 2,
        y: padding * 0.7,
    };
    const needleStartPoint3 = { x: centerX + 5, y: needleLength };
    const needleStartPoint4 = { x: centerX - 5, y: needleLength };

    const tickInnerRadius = arcRadius - 8;

    const getNeedlePoints = (score: number) => {
        const paddingAngleForTopNeedle = 0.5; // degrees to shift the needle slightly for drawing the top part of the needle
        const paddingAngleForBottomNeedle = 2; // degrees to shift the needle slightly for drawing the bottom part of the needle

        // Point 1,2,3,4 are the 4 points that form the needle polygon in order of clockwise.
        const rToPoint1 = Math.sqrt(
            Math.pow(needleStartPoint1.x - centerX, 2) +
                Math.pow(needleStartPoint1.y - centerY, 2)
        );

        const rToPoint2 = Math.sqrt(
            Math.pow(needleStartPoint2.x - centerX, 2) +
                Math.pow(needleStartPoint2.y - centerY, 2)
        );

        const rToPoint3 = Math.sqrt(
            Math.pow(needleStartPoint3.x - centerX, 2) +
                Math.pow(needleStartPoint3.y - centerY, 2)
        );

        const rToPoint4 = Math.sqrt(
            Math.pow(needleStartPoint4.x - centerX, 2) +
                Math.pow(needleStartPoint4.y - centerY, 2)
        );

        const needleEndPoint1 = polarToCartesian(
            centerX,
            centerY,
            rToPoint1,
            scoreToAngle(score) +
                (score >= 50 ? -1 : 1) * paddingAngleForTopNeedle // padding is important to show the needle
        );
        const needleEndPoint2 = polarToCartesian(
            centerX,
            centerY,
            rToPoint2,
            scoreToAngle(score) +
                (score >= 50 ? 1 : -1) * paddingAngleForTopNeedle
        );
        const needleEndPoint3 = polarToCartesian(
            centerX,
            centerY,
            rToPoint3,
            scoreToAngle(score) +
                (score >= 50 ? 1 : -1) * paddingAngleForBottomNeedle
        );
        const needleEndPoint4 = polarToCartesian(
            centerX,
            centerY,
            rToPoint4,
            scoreToAngle(score) +
                (score >= 50 ? -1 : 1) * paddingAngleForBottomNeedle
        );

        const temp = `${needleEndPoint1.x},${needleEndPoint1.y} ${needleEndPoint2.x},${needleEndPoint2.y} ${needleEndPoint3.x},${needleEndPoint3.y} ${needleEndPoint4.x},${needleEndPoint4.y}`;

        return temp;
    };

    return (
        <>
            <svg
                viewBox={`0 0 ${width} ${height}`}
                role="img"
                aria-label={`Breach likelihood score ${score}`}
            >
                // define gradient for ticks and needle
                <defs>
                    <linearGradient
                        id="purpleGradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="#DCC8FF" />
                        <stop offset="50%" stopColor="#A673FF" />
                        <stop offset="100%" stopColor="#6A3BD9" />
                    </linearGradient>
                </defs>
                {ARC_SEGMENTS.map((segment) => (
                    <path
                        key={`${segment.from}-${segment.to}`}
                        d={arcPath(
                            centerX,
                            centerY,
                            arcRadius,
                            scoreToAngle(segment.from) + gap,
                            scoreToAngle(segment.to) - gap
                        )}
                        stroke={segment.color}
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                    />
                ))}
                {TICKS.map((scoreValueOfTick) => {
                    let realValueToDrawTick: number;
                    switch (scoreValueOfTick) {
                        case 0:
                            realValueToDrawTick = 0.5; // to avoid overlapping with the semicircle start point
                            break;
                        case 100:
                            realValueToDrawTick = 99.5; // to avoid overlapping with the semicircle end point
                            break;
                        default:
                            realValueToDrawTick = scoreValueOfTick;
                    }

                    return (
                        <g key={scoreValueOfTick}>
                            {(() => {
                                const baseAngle =
                                    scoreToAngle(realValueToDrawTick);

                                // convert to radians once
                                const rad = (baseAngle * Math.PI) / 180;

                                // 🎯 CONTROL THESE INDEPENDENTLY
                                const labelRadius = tickInnerRadius - 25; // distance of labels from center
                                const tickRadius = tickInnerRadius; // distance of ticks from center

                                const tickAngleOffset = -1; // shift ticks along arc (degrees)

                                // label position
                                const labelX =
                                    centerX + Math.cos(rad) * labelRadius;
                                const labelY =
                                    centerY + Math.sin(rad) * labelRadius;

                                // tick position (uses tickAngleOffset angle to tweak tick position along the arc)
                                const tickRad =
                                    ((baseAngle + tickAngleOffset) * Math.PI) /
                                    180;

                                const tickX =
                                    centerX + Math.cos(tickRad) * tickRadius;
                                const tickY =
                                    centerY + Math.sin(tickRad) * tickRadius;

                                return (
                                    <>
                                        {/* tick */}
                                        <g
                                            transform={`translate(${tickX},${tickY}) rotate(${baseAngle + tickAngleOffset + 90})`}
                                        >
                                            <path
                                                d="M 1.75 0 A 1.75 1.75 0 0 1 3.5 1.75 L 3.5 11.5 L 0 11.5 L 0 1.75 A 1.75 1.75 0 0 1 1.75 0 Z"
                                                fill={
                                                    hasGradient
                                                        ? "url(#purpleGradient)"
                                                        : "#626262"
                                                }
                                            />
                                        </g>

                                        {/* label */}
                                        <text
                                            x={labelX}
                                            y={labelY}
                                            textAnchor="middle"
                                            fill="#B0B0B0"
                                            fontSize="10"
                                            fontFamily="Montserrat"
                                            style={{ fontWeight: 400 }}
                                        >
                                            {scoreValueOfTick}
                                        </text>
                                    </>
                                );
                            })()}
                        </g>
                    );
                })}
                {/* needle */}
                <polygon
                    points={getNeedlePoints(score)}
                    fill={hasGradient ? "url(#purpleGradient)" : "#DBDBE2"}
                    stroke="transparent"
                />
                {debug && (
                    <>
                        <circle
                            cx={centerX}
                            cy={centerY}
                            r={`${needleRadius}`}
                            fill="transparent"
                            stroke="red"
                        />
                        <circle
                            cx={centerX}
                            cy={centerY}
                            r="10"
                            fill="red"
                            stroke="transparent"
                        />
                    </>
                )}
            </svg>

            <div className="absolute left-0 top-[55%] w-full text-center">
                <p
                    className="font-montserrat text-[20px] font-medium leading-[48px] tracking-[-0.4px] md:text-[30px] lg:text-[40px]"
                    style={{ color: getScoreColor(score) }}
                >
                    {score}%
                </p>
            </div>
        </>
    );
};

export default BreachLikelihoodScale;
