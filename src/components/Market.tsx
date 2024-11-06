import { useAppSelector } from "@store";

export const Market: React.FC = () => {
  const { targetMarket } = useAppSelector((state) => state.data);
  return (
    <div className="page-rounded page-bd page-bg-white p-sm-4 p-3 mb-sm-4 mb-3">
      <div className="mb-3 fw-bold page-text-large d-flex align-items-center">
        <span className="material-symbols-outlined me-1">business_center</span>目標市場
      </div>
      <div className="mt-3">{targetMarket}</div>
    </div>
  );
};
