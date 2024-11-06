import { useAppSelector } from "@store";

export const MileStone: React.FC = () => {
  const milestones = useAppSelector((state) => state.data.milestones);
  return (
    <div className="page-rounded page-bd page-bg-white p-sm-4 p-3 mb-sm-4 mb-3">
      <div className="mb-3 fw-bold page-text-large d-flex align-items-center">
        <span className="material-symbols-outlined me-1">radar</span>募資里程目標
      </div>
      <div className="mt-3">
        {milestones.map((milestone) => (
          <div className="py-2 milestone d-flex align-items-center" key={milestone}>
            <span className="material-symbols-outlined me-2 page-text-third page-text-large">check_circle</span>
            {milestone}
          </div>
        ))}
      </div>
    </div>
  );
};
