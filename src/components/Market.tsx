import { useAppSelector, pageTexts } from "@store";

export const Market: React.FC = () => {
  const { targetMarket } = useAppSelector((state) => state.data);
  const lang = useAppSelector((state) => state.lang);
  return (
    <div className="page-rounded page-bd page-bg-white p-sm-4 p-3 d-flex flex-column gap-3">
      <div className="fw-bold page-text-large d-flex align-items-center">
        <span className="material-symbols-outlined me-1">business_center</span>
        {pageTexts.targetMarket[lang]}
      </div>
      <div>{targetMarket}</div>
    </div>
  );
};
