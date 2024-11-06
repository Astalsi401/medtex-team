import { useAppSelector } from "@store";

export const Market: React.FC = () => {
  const { targetMarket } = useAppSelector((state) => state.data);
  return (
    <div className="page-rounded page-bd page-bg-white p-4 mb-4">
      <div className="my-3 fw-bold page-text-large d-flex align-items-center">
        <span className="material-symbols-outlined me-1">business_center</span>目標市場
      </div>
      <div className="my-3">{targetMarket}</div>
    </div>
  );
};
