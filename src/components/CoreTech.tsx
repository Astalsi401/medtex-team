import { useAppSelector } from "@store";

export const CoreTech: React.FC = () => {
  const { coreTech, coreTechKeywords } = useAppSelector((state) => state.data);
  return (
    <div className="page-rounded page-bd page-bg-white p-4 mb-4">
      <div className="my-3 fw-bold page-text-large d-flex align-items-center">
        <span className="material-symbols-outlined me-1">settings</span>關鍵技術
      </div>
      <div className="my-3">{coreTech}</div>
      <div className="my-3 d-flex flex-wrap gap-3">
        {coreTechKeywords.map((word) => (
          <div className="page-tag p-3" key={word}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};
