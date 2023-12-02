import type { Meta } from "@storybook/react";
import WidgetLayout from ".";
import { ReactNode } from "react";

const meta: Meta<typeof WidgetLayout> = {
  title: "widgets/WidgetLayout",
  component: WidgetLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const Template = () => {
  return (
    <Container>
      <WidgetLayout title="위젯 제목" hasData={true}>
        <div>위젯</div>
      </WidgetLayout>
    </Container>
  );
};

const EmptyDataTemplate = () => {
  return (
    <Container>
      <WidgetLayout title="위젯 제목" hasData={false}>
        <div>위젯</div>
      </WidgetLayout>
    </Container>
  );
};

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-30 h-30">{children}</div>;
};

export const Default = Template.bind({});
export const EmptyData = EmptyDataTemplate.bind({});
