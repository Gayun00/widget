import { useEffect, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { STORAGE_KEY } from "@/constants";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import DAU from "@/components/widgets/DAU";
import TopReferralPie from "@/components/widgets/TopReferralPie";
import TopReferralTable from "@/components/widgets/TopReferralTable";
import TotalEventCountSum from "@/components/widgets/TotalEventCountSum";
import UniqueEventCountSum from "@/components/widgets/UniqueEventCountSum";
import "./index.css";
import dayjs from "dayjs";

const ReactGridLayout = WidthProvider(RGL);

interface Props {
  className: string;
  rowHeight: number;
  cols: number;
}

interface Layout {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
}

const initialLayout = [
  { x: 0, y: 0, w: 6, h: 7, i: "0" },
  { x: 6, y: 0, w: 6, h: 7, i: "1" },
  { x: 0, y: 7, w: 12, h: 8, i: "2" },
  { x: 0, y: 14, w: 6, h: 12, i: "3" },
  { x: 6, y: 14, w: 6, h: 12, i: "4" },
];

const Dashboard = ({ className, rowHeight, cols }: Props) => {
  // data가 존재하는 날짜 중 임의로 '오늘 날짜'로 가정
  const today = "2022-03-23";

  const savedLayout = localStorage.getItem(STORAGE_KEY.DASHBOARD_LAYOUT_1);
  const [layout, setLayout] = useState(
    savedLayout ? JSON.parse(savedLayout) : initialLayout
  );
  const [isDraggable, setIsDraggable] = useState(true);

  const handleLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
    localStorage.setItem(
      STORAGE_KEY.DASHBOARD_LAYOUT_1,
      JSON.stringify(layout)
    );
  };

  const initializeLayout = () => {
    setLayout(initialLayout);
  };

  const handleDraggable = () => {
    setIsDraggable(!isDraggable);
  };

  function getSevenDaysAgo(dateStr: string) {
    return dayjs(dateStr).subtract(7, "day").format("YYYY.MM.DD");
  }

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY.DASHBOARD_LAYOUT_1,
      JSON.stringify(layout)
    );
  }, [layout]);

  return (
    <div>
      <div className="py-3 flex justify-center gap-x-5">
        <Toggle onClick={handleDraggable}>위젯 고정</Toggle>
        <Button variant="outline" onClick={initializeLayout}>
          레이아웃 초기화
        </Button>
      </div>

      <ReactGridLayout
        className={className || "layout"}
        isDraggable={isDraggable}
        layout={layout}
        onLayoutChange={handleLayoutChange}
        rowHeight={rowHeight}
        cols={cols}>
        <div key="0">
          <UniqueEventCountSum date={today} />
        </div>
        <div key="1">
          <TotalEventCountSum date={today} />
        </div>
        <div key="2">
          <DAU startDate={getSevenDaysAgo(today)} endDate={today} />
        </div>
        <div key="3">
          <TopReferralPie />
        </div>
        <div key="4">
          <TopReferralTable />
        </div>
      </ReactGridLayout>
    </div>
  );
};

Dashboard.defaultProps = {
  className: "layout",
  rowHeight: 30,
  cols: 12,
};

export default Dashboard;
