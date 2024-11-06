import { useAppSelector } from "@store";
import { useMemo } from "react";

export const CoreProducts: React.FC = () => {
  const { coreProducts } = useAppSelector((state) => state.data);
  const cols = useMemo(() => ["", "Pre-clinical", "Phase I", "Phase II", "Phase III", "已取證", "取證國家"], []);
  return (
    <div className="page-rounded page-bd page-bg-white mb-4">
      <div className="my-3 p-4 pb-0 fw-bold page-text-large d-flex align-items-center">
        <span className="material-symbols-outlined me-1">signal_cellular_alt</span>核心產品與進度
      </div>
      <div className="mt-3 graph" style={{ overflowX: "auto" }}>
        <Row>
          {cols.map((colname) => (
            <Cell key={colname} className="text-center page-text-white page-bg-third" children={colname} />
          ))}
        </Row>
        {coreProducts.map(({ name, progress }) => (
          <Row key={name} className="position-relative" style={{ "--progress": progress * 10 } as React.CSSProperties}>
            <Cell children={name} />
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Cell key={`${name}-progress-${i}`} />
              ))}
          </Row>
        ))}
      </div>
    </div>
  );
};

const Row: React.FC<{ children?: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
  <div className={`d-flex flex-nowrap ${className ? `${className}` : ""}`} style={style}>
    {children}
  </div>
);
const Cell: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => <div className={`cell p-2 fw-bold page-bd ${className ? `${className}` : ""}`}>{children}</div>;
