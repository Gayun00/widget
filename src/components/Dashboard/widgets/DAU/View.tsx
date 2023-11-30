import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface Props {
  dates: string[];
  column: {
    name: string;
    data: number[];
  };
  line: {
    name: string;
    data: number[];
  };
}

const View = ({ dates, column, line }: Props) => {
  const maxValue = Math.max(Math.max(...column.data), Math.max(...line.data));
  const [series] = useState([
    {
      name: column.name,
      type: "column",
      data: column.data,
    },
    {
      name: line.name,
      type: "line",
      data: line.data,
    },
  ]);

  const [options] = useState<ApexOptions>({
    chart: {
      height: maxValue,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "DAU",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: dates,
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Total event count",
        },
      },
      {
        opposite: true,
        title: {
          text: "Unique event count",
        },
      },
    ],
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default View;
