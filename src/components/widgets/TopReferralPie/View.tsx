import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import WidgetLayout from "../WidgetLayout";

interface Props {
  title: string;
  data: number[];
  labels: string[];
}

function View({ title, data, labels }: Props) {
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
    <WidgetLayout title={title} hasData={!!data.length || !!labels.length}>
      <div className="flex justify-center items-center w-full h-full">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width={400}
        />
      </div>
    </WidgetLayout>
  );
}

export default View;
