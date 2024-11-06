import { useAppSelector } from "@store";

export const Highlight: React.FC = () => {
  const { highlights } = useAppSelector((state) => state.data);
  return (
    <div className="page-highlight page-rounded page-bd page-text-white p-sm-4 p-3 mb-sm-4 mb-3">
      <div className="mb-3 fw-bold page-text-large d-flex align-items-center">
        <span className="material-symbols-outlined me-1">lightbulb</span>投資亮點
      </div>
      <div className="mt-3">
        <ol>
          {highlights.map((highlight) => (
            <li className="my-2" key={highlight}>
              {highlight}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
