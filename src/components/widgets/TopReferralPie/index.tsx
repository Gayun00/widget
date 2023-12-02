import {
  generateSumArrayOfKey,
  seperateKeyValuesFromArray,
} from "@/utils/handleData";
import View from "./View";
import { useTopReferralQuery } from "@/queries";

const REFERRAL_INDEX = 1;
const MAX_DISPLAY_RANGE = 4;

function TopReferralPie() {
  const { data: topReferral } = useTopReferralQuery();
  if (!topReferral) return;
  const data = generateSumArrayOfKey(
    topReferral,
    REFERRAL_INDEX,
    MAX_DISPLAY_RANGE
  );
  if (!data) return;
  const { keys, values } = seperateKeyValuesFromArray(data);
  return <View title="Top referrals" data={values} labels={keys} />;
}

export default TopReferralPie;
