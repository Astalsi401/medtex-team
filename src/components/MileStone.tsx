import { useAppSelector, pageTexts } from "@store";

export const MileStone: React.FC = () => {
  const milestones = useAppSelector((state) => state.data.milestones);
  const lang = useAppSelector((state) => state.lang);
  return (
    <div className="page-rounded page-bd page-bg-white p-sm-4 p-3 d-flex flex-column gap-3">
      <div className="fw-bold page-text-large d-flex align-items-center">
        <span className="material-symbols-outlined me-1">radar</span>
        {pageTexts.milestonesForThisRound[lang]}
      </div>
      <div>
        {milestones.map(
          (milestone) =>
            milestone.length > 0 && (
              <div className="py-2 milestone d-flex align-items-center" key={milestone}>
                <span className="material-symbols-outlined me-2 page-text-third page-text-large">check_circle</span>
                {milestone}
              </div>
            )
        )}
      </div>
    </div>
  );
};
