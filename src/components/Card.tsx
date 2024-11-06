import { useAppSelector } from "@store";
import { useMemo } from "react";

export const Card: React.FC = ({}) => {
  const { established, fundingAmount, annualRevenue, currentFundingRound, currentFundingAmount, postMoneyValuation } = useAppSelector((state) => state.data);
  const keyNames = useMemo<{ [key: string]: string }>(() => ({ established: "成立時間", fundingAmount: "累積募資額", annualRevenue: "年營收", currentFundingRound: "募資輪次", currentFundingAmount: "本輪募資額", postMoneyValuation: "投後估值" }), []);
  return (
    <div className="page-card page-rounded page-bd row p-sm-4 p-3 mx-0 text-center">
      {Object.entries({ established, fundingAmount, annualRevenue, currentFundingRound, currentFundingAmount, postMoneyValuation }).map(([key, value]) => (
        <CardInfo key={key} title={keyNames[key]} value={value} />
      ))}
    </div>
  );
};

const CardInfo: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="col-4 d-flex flex-column px-2 px-sm-3">
    <div className="my-2">{title}</div>
    <div className="my-2 fw-bold page-text-large flex-grow-1" style={{ minHeight: 86 }}>
      {value}
    </div>
  </div>
);
