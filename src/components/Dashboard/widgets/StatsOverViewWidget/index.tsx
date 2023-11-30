import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatNumberWithCommas } from "@/utils/handleData";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

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
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-sm text-primary font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-x-3">
          <Badge variant="secondary">{type}</Badge>
          <p className="text-sm">{property}</p>
        </div>
        <CardDescription className="space-y-3">
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
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default StatsOverViewWidget;
