import { useAppSelector } from "@store";

export const Highlight: React.FC = () => {
  const { highlights } = useAppSelector((state) => state.data);
  return (
    <div className="page-highlight page-rounded page-bd page-text-white p-4 mb-4">
      <div className="my-3 fw-bold page-text-large d-flex align-items-center">
        <span className="material-symbols-outlined me-1">lightbulb</span>投資亮點
      </div>
      <div className="my-3">
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
