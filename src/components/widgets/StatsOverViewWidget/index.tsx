import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { formatNumberWithCommas } from "@/utils/handleData";
import { Badge } from "@/components/ui/badge";
import WidgetLayout from "../WidgetLayout";

interface Props {
  title: string;
  type: string;
  property: string;
  data: number;
  changeRate: number;
}

function StatsOverViewWidget({
  title,
  type,
  property,
  data,
  changeRate,
}: Props) {
  return (
    <WidgetLayout title={title} hasData={!!data}>
      <div className="flex gap-x-3">
        <Badge variant="secondary">{type}</Badge>
        <p className="text-sm">{property}</p>
      </div>
      <div className="space-y-3">
        <p className="text-4xl font-extrabold text-black">
          {formatNumberWithCommas(data)}
        </p>
        <div className="flex items-center gap-x-2">
          {changeRate < 0 ? (
            <FaArrowDown className="text-primary" />
          ) : (
            <FaArrowUp className="text-primary" />
          )}
          <p className="text-primary">{changeRate}</p>
        </div>
      </div>
    </WidgetLayout>
  );
}

export default StatsOverViewWidget;
