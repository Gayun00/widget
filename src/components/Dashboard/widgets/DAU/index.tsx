import { useUsersQuery } from "@/queries";
import View from "./View";
import { generateDateArray, generateSumInDateRange } from "@/utils/handleData";

interface Props {
  startDate: string;
  endDate: string;
}

function DAU({ startDate, endDate }: Props) {
  const { data: userEvents } = useUsersQuery();
  const uniqueEventCounts = generateSumInDateRange(
    userEvents?.data?.rows || [],
    startDate,
    endDate,
    1
  );

  const totalEventCounts = generateSumInDateRange(
    userEvents?.data?.rows || [],
    startDate,
    endDate,
    2
  );

  const dates = generateDateArray(startDate, endDate);

  return (
    <View
      dates={dates}
      column={{
        name: "Total event count",
        data: totalEventCounts,
      }}
      line={{
        name: "Unique event count",
        data: uniqueEventCounts,
      }}
    />
  );
}

export default DAU;
