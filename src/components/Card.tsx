import { useAppSelector, pageTexts } from "@store";
import { useMemo } from "react";

export const Card: React.FC = ({}) => {
  const { established, fundingAmount, annualRevenue, currentFundingRound, currentFundingAmount, postMoneyValuation } = useAppSelector((state) => state.data);
  const lang = useAppSelector((state) => state.lang);
  const keyNames = useMemo<{ [key: string]: string }>(() => ({ established: pageTexts.established[lang], fundingAmount: pageTexts.fundingAmount[lang], annualRevenue: pageTexts.annualRevenue[lang], currentFundingRound: pageTexts.currentFundingRound[lang], currentFundingAmount: pageTexts.currentFundingAmount[lang], postMoneyValuation: pageTexts.postMoneyValuation[lang] }), []);
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
