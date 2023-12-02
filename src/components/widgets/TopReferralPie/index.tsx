import {
  generateSumArrayOfKey,
  seperateKeyValuesFromArray,
} from "@/utils/handleData";
import View from "./View";
import { useTopReferralQuery } from "@/queries";

function TopReferralPie() {
  const { data: topReferral } = useTopReferralQuery();
  if (!topReferral?.data.rows) return;
  const data = generateSumArrayOfKey(topReferral?.data.rows, 1, 4);
  if (!data) return;
  const { keys, values } = seperateKeyValuesFromArray(data);
  return <View data={values} labels={keys} />;
}

export default TopReferralPie;
