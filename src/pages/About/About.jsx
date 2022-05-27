import React from "react";
import ReactApexChart from "react-apexcharts";

function About() {
  const series = [
    {
      name: "Room #1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Room #2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options = {
    grid: {
      show: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
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
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <>
      <section style={{}}>
        About Page
        <div>
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            width="500px"
          />
        </div>
      </section>
    </>
  );
}

export default About;
