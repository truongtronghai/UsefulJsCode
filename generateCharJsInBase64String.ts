import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Filler
);

type GenerateHeadlessScoreTrendParams = {
    chartDataSet: { date: string; score: number }[];
    range?: string;
    showBackgroundGradient?: boolean;
    showRightYAxis?: boolean;
    mainYAxisMappingLabel?: { value: number; label: string }[];
    width?: number;
    height?: number;
};

export const generateHeadlessScoreTrendBase64 = async ({
    chartDataSet,
    range = "7",
    showBackgroundGradient = false,
    showRightYAxis = true,
    mainYAxisMappingLabel = [
        { value: 0, label: "" },
        { value: 25, label: "Low" },
        { value: 50, label: "Medium" },
        { value: 75, label: "High" },
        { value: 100, label: "Critical" },
    ],
    width = 1200,
    height = 400,
}: GenerateHeadlessScoreTrendParams): Promise<string> => {
    const canvas = document.createElement("canvas");

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
        throw new Error("Cannot create canvas context");
    }

    const chartData = {
        labels: chartDataSet.map((item) => item.date),
        datasets: [
            {
                data: chartDataSet.map((item) => item.score),

                borderColor: (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        return "#a673ff";
                    }

                    const gradient = ctx.createLinearGradient(
                        0,
                        chartArea.top,
                        0,
                        chartArea.bottom
                    );

                    gradient.addColorStop(0, "rgba(241, 40, 40, 1)");
                    gradient.addColorStop(0.25, "rgba(239, 95, 0, 1)");
                    gradient.addColorStop(0.5, "rgba(250, 173, 20, 1)");
                    gradient.addColorStop(0.75, "rgba(82, 196, 26, 1)");

                    return gradient;
                },

                borderWidth: 2,
                pointRadius: 0,
                fill: showBackgroundGradient,

                backgroundColor: (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea, scales } = chart;

                    if (!chartArea) {
                        return null;
                    }

                    const yScale = scales.y;

                    const min = yScale.min;
                    const max = yScale.max;

                    const getColorStop = (value: number) =>
                        1 - (value - min) / (max - min);

                    const gradient = ctx.createLinearGradient(
                        0,
                        chartArea.top,
                        0,
                        chartArea.bottom
                    );

                    gradient.addColorStop(
                        getColorStop(75),
                        "rgba(241, 40, 40, 0.08)"
                    );

                    gradient.addColorStop(
                        getColorStop(50),
                        "rgba(239, 95, 0, 0.08)"
                    );

                    gradient.addColorStop(
                        getColorStop(25),
                        "rgba(250, 173, 20, 0.08)"
                    );

                    gradient.addColorStop(
                        getColorStop(0),
                        "rgba(82, 196, 26, 0.08)"
                    );

                    return gradient;
                },
            },
        ],
    };

    const options = {
        responsive: false,
        animation: { duration: 0 },

        plugins: {
            legend: {
                display: false,
            },

            title: {
                display: false,
            },

            tooltip: {
                enabled: false,
            },
        },

        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                },

                ticks: {
                    callback: function (value: string | number) {
                        if (chartData.labels.length === 0) {
                            return "";
                        }

                        const dt = new Date(chartData.labels[value as number]);

                        if (range === "1") {
                            return dt.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            });
                        }

                        return dt.toLocaleDateString();
                    },

                    color: "#ADADB6",

                    font: {
                        family: "Montserrat",
                        size: 12,
                        weight: 500,
                    },

                    maxRotation: 0,
                    minRotation: 0,
                },
            },

            y: {
                position: "left" as const,

                min: 0,
                max: 100,

                ticks: {
                    stepSize: 25,

                    font: {
                        family: "Montserrat",
                        size: 12,
                        weight: 500,
                    },

                    callback: function (tickValue: string | number) {
                        if (
                            typeof tickValue === "number" &&
                            [0, 25, 50, 75, 100].includes(tickValue)
                        ) {
                            return mainYAxisMappingLabel.length
                                ? mainYAxisMappingLabel.find(
                                      (ele) => ele.value === tickValue
                                  )?.label || ""
                                : tickValue;
                        }

                        return "";
                    },
                },

                grid: {
                    drawTicks: true,
                    drawOnChartArea: true,
                    color: "rgba(128, 128, 128, 0.2)",
                    lineWidth: 1,
                },
            },

            yRight: showRightYAxis
                ? {
                      position: "right" as const,

                      min: 0,
                      max: 100,

                      ticks: {
                          stepSize: 25,

                          font: {
                              family: "Montserrat",
                              size: 12,
                              weight: 500,
                          },

                          callback: function (tickValue: string | number) {
                              if (
                                  typeof tickValue === "number" &&
                                  [0, 25, 50, 75, 100].includes(tickValue)
                              ) {
                                  return tickValue;
                              }

                              return "";
                          },
                      },

                      grid: {
                          drawTicks: true,
                          drawOnChartArea: false,
                          color: "rgba(128, 128, 128, 0.2)",
                          lineWidth: 1,
                      },
                  }
                : undefined,
        },
    };

    const chart = new ChartJS(ctx, {
        type: "line",
        data: chartData,
        options,
    });

    // * Buying time to ensure the chart is fully rendered before generating base64. This is an important workaround for the issue where the generated base64 is a blank image due to the chart not being fully rendered.
    await new Promise((resolve) => setTimeout(resolve, 100));

    const base64 = chart.toBase64Image();

    chart.destroy();

    return base64;
};
