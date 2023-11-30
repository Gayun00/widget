import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface Props {
  data: number[];
  labels: string[];
}

function View({ data, labels }: Props) {
  const [series] = useState(data);
  const [options] = useState<ApexOptions>({
    chart: {
      width: 380,
      type: "pie",
    },
    labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={380}
      />
    </div>
  );
}

export default View;
