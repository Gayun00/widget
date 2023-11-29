import { useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import "./index.css";
import { useUsersQuery } from "@/queries";

const ReactGridLayout = WidthProvider(RGL);

interface Props {
  className: string;
  items: number;
  rowHeight: number;
  onLayoutChange: (layout: Layout[]) => void;
  cols: number;
}

interface Layout {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
}

const BasicLayout = ({
  className,
  items,
  rowHeight,
  onLayoutChange,
  cols,
}: Props) => {
  const [layout, setLayout] = useState(generateLayout());

  function generateDOM() {
    return _.map(_.range(items), function (i) {
      return (
        <div key={i}>
          <span className="grid-item">{i}</span>
        </div>
      );
    });
  }

  function generateLayout() {
    return _.map(new Array(items), function (_, i) {
      const y = Math.ceil(Math.random() * 4) + 1;

      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
      };
    });
  }

  const handleLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
    onLayoutChange(newLayout);
  };

  return (
    <ReactGridLayout
      className={className || "layout"}
      layout={layout}
      onLayoutChange={handleLayoutChange}
      rowHeight={rowHeight}
      cols={cols}>
      {generateDOM()}
    </ReactGridLayout>
  );
};

BasicLayout.defaultProps = {
  className: "layout",
  items: 20,
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: 12,
};

export default BasicLayout;
