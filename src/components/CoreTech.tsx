import { useAppSelector, pageTexts } from "@store";

export const CoreTech: React.FC = () => {
  const { coreTech, coreTechKeywords } = useAppSelector((state) => state.data);
  const lang = useAppSelector((state) => state.lang);
  return (
    <div className="page-rounded page-bd page-bg-white p-sm-4 p-3 d-flex flex-column gap-3">
      <div className="fw-bold page-text-large d-flex align-items-center">
        <span className="material-symbols-outlined me-1">settings</span>
        {pageTexts.coreTechnology[lang]}
      </div>
      <div>{coreTech}</div>
      <div className="d-flex flex-wrap gap-3">
        {coreTechKeywords.map((word) => (
          <div className="page-tag p-3" key={word}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};
