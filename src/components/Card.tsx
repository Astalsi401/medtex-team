import { useAppSelector } from "@store";
import { useMemo } from "react";

export const Card: React.FC = ({}) => {
  const { established, fundingAmount, annualRevenue, currentFundingRound, currentFundingAmount, postMoneyValuation } = useAppSelector((state) => state.data);
  const keyNames = useMemo<{ [key: string]: string }>(() => ({ established: "成立時間", fundingAmount: "累積募資額", annualRevenue: "年營收", currentFundingRound: "募資輪次", currentFundingAmount: "本輪募資額", postMoneyValuation: "投後估值" }), []);
  return (
    <div className="page-card page-rounded page-bd p-sm-4 p-3 text-center">
      <div className="row mx-0 g-4">
        {Object.entries({ established, fundingAmount, annualRevenue, currentFundingRound, currentFundingAmount, postMoneyValuation }).map(([key, value]) => (
          <CardInfo key={key} title={keyNames[key]} value={value} />
        ))}
      </div>
    </div>
  );
};

const CardInfo: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="col-4 d-flex flex-column gap-2">
    <div>{title}</div>
    <div className="fw-bold page-text-large flex-grow-1 pb-4">{value}</div>
  </div>
);
