import { Card } from "@/components/ui/card";
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
      width: 500,
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
    <Card className="flex justify-center items-center w-full h-full">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={400}
      />
    </Card>
  );
}

export default View;
