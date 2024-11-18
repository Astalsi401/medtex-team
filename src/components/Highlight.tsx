import { useAppSelector, pageTexts } from "@store";

export const Highlight: React.FC = () => {
  const { highlights } = useAppSelector((state) => state.data);
  const lang = useAppSelector((state) => state.lang);
  return (
    <div className="page-highlight page-rounded page-bd page-text-white p-sm-4 p-3 d-flex flex-column gap-3">
      <div className="fw-bold page-text-large d-flex align-items-center">
        <span className="material-symbols-outlined me-1">lightbulb</span>
        {pageTexts.keyInvestmentHighlights[lang]}
      </div>
      <div>
        <ol>
          {highlights.map(
            (highlight) =>
              highlight.length > 0 && (
                <li className="my-2" key={highlight}>
                  {highlight}
                </li>
              )
          )}
        </ol>
      </div>
    </div>
  );
};
