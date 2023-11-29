import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
  type: string;
  property: string;
  data: number;
  changeRate: number;
}

function UsersWidget({ title, type, property, data, changeRate }: Props) {
  return (
    <Card>
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
        <CardDescription className="text-4xl font-extrabold text-black">
          {data}
        </CardDescription>
        <p className="text-primary">{changeRate}</p>
      </CardContent>
    </Card>
  );
}

export default UsersWidget;
