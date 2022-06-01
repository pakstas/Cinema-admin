function ChartsColorPalette(index) {
  switch (index) {
    case 1:
      return [
        "#fd7f6f",
        "#7eb0d5",
        "#b2e061",
        "#bd7ebe",
        "#ffb55a",
        "#ffee65",
        "#beb9db",
        "#fdcce5",
        "#8bd3c7",
      ];
    case 2:
      return [
        "#e60049",
        "#0bb4ff",
        "#50e991",
        "#e6d800",
        "#9b19f5",
        "#ffa300",
        "#dc0ab4",
        "#b3d4ff",
        "#00bfa0",
      ];
    case 3:
      return [
        "#1984c5",
        "#22a7f0",
        "#63bff0",
        "#a7d5ed",
        "#e2e2e2",
        "#e1a692",
        "#de6e56",
        "#e14b31",
        "#c23728",
      ];
    case 4:
      return [
        "#ffb400",
        "#d2980d",
        "#a57c1b",
        "#786028",
        "#363445",
        "#48446e",
        "#5e569b",
        "#776bcd",
        "#9080ff",
      ];
    case 5:
      return [
        "#54bebe",
        "#76c8c8",
        "#98d1d1",
        "#badbdb",
        "#dedad2",
        "#e4bcad",
        "#df979e",
        "#d7658b",
        "#c80064",
      ];
    case 6:
      return [
        "#e27c7c",
        "#a86464",
        "#6d4b4b",
        "#503f3f",
        "#333333",
        "#3c4e4b",
        "#466964",
        "#599e94",
        "#6cd4c5",
      ];
    case 7:
      return [
        "#ea5545",
        "#f46a9b",
        "#ef9b20",
        "#edbf33",
        "#ede15b",
        "#bdcf32",
        "#87bc45",
        "#27aeef",
        "#b33dc6",
      ];
    default:
      return [
        "#ffb400",
        "#9080ff",
        "#00C89B",
        "#8F131E",
        "#00A5FA",
        "#b37d00",
        "#3F3B96",
        "#00876D",
        "#DA3F41",
        "#00D5F5",
      ];
  }
}

const ChartsData = {
  areachart: {
    series: [
      {
        name: "Room #1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Room #2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      colors: ChartsColorPalette(),
      grid: {
        show: false,
      },
      chart: {
        sparkline: {
          enabled: true,
        },
        stacked: false,
        toolbar: {
          show: false,
        },
        height: 350,
        width: "100%",
        type: "area",
      },
      dataLabels: {
        enabled: false,
        background: {
          padding: 0,
        },
        offsetX: 0,
        offsetY: 0,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisTicks: { show: false },
        axisBorder: { show: false },
        type: "datetime",
        categories: [
          "2022-06-01",
          "2022-06-02",
          "2022-06-03",
          "2022-06-04",
          "2022-06-05",
          "2022-06-06",
          "2022-06-07",
        ],
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        theme: "dark",
        x: {
          show: true,
          format: "dd/MM/yy",
        },
      },
    },
  },
  barchart: {
    options: {
      colors: ChartsColorPalette(),
      grid: {
        show: true,
        borderColor: "transparent",
        strokeDashArray: 2,
        padding: {
          left: 0,
          right: 0,
          bottom: 0,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "42%",
          endingShape: "rounded",
          borderRadius: 5,
        },
      },

      fill: {
        type: "solid",
        opacity: 1,
      },
      chart: {
        offsetX: -15,
        toolbar: {
          show: false,
        },
        foreColor: "#adb0bb",
        fontFamily: "'Roboto',sans-serif",
        sparkline: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      legend: {
        show: false,
      },
      xaxis: {
        type: "category",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      yaxis: {
        show: true,
        min: 100,
        max: 400,
        tickAmount: 3,
      },
      stroke: {
        show: true,
        width: 5,
        lineCap: "butt",
        colors: ["transparent"],
      },
      tooltip: {
        theme: "dark",
      },
    },
    series: [
      {
        name: "The Godfather",
        data: [355, 390, 300, 350, 390, 180],
      },
      {
        name: "The Dark Knight",
        data: [280, 250, 325, 215, 250, 310],
      },
    ],
  },
  radialchart: {
    series: [82, 72, 65, 51, 37],
    options: {
      colors: ChartsColorPalette(),
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Average",
            },
          },
        },
      },
      labels: [
        "The Godfather",
        "The Dark Knight",
        "Joker",
        "Avengers: Infinity War",
        "Other",
      ],
    },
  },
};

export default ChartsData;
