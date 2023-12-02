import React, { ReactNode } from "react";
import EmptyWidgetData from "@/components/fallbacks/EmptyWidgetData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  children: ReactNode;
  hasData: boolean;
}

function WidgetLayout({ title, children, hasData }: Props) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-sm text-primary font-bold">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="h-full space-y-3">
        {hasData ? <>{children}</> : <EmptyWidgetData />}
      </CardContent>
    </Card>
  );
}

export default WidgetLayout;
