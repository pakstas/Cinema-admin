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
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
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
        x: {
          show: true,
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  },
  barchart: {
    options: {
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
        fontFamily: "'DM Sans',sans-serif",
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
        name: "Ample Admin",
        data: [355, 390, 300, 350, 390, 180],
      },
      {
        name: "Pixel Admin",
        data: [280, 250, 325, 215, 250, 310],
      },
    ],
  },
  radialchart: {
    series: [44, 55, 67, 83],
    options: {
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
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    },
  },
};

export default ChartsData;
