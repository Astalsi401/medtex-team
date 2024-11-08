import { useAppSelector } from "@store";
import { useMemo } from "react";

export const CoreProducts: React.FC = () => {
  const { coreProducts } = useAppSelector((state) => state.data);
  const productTypes = useMemo(() => Object.entries(Object.groupBy(coreProducts, (p) => p.type)), [coreProducts]);
  const cols = useMemo<{ [key: string]: string[] }>(() => ({ device: ["", "Pre-clinical", "Phase I", "Phase II", "Phase III", "Marketed", "取證國家"], drug: ["", "Prototype", "Pre-Clinical", "Clinical", "Marketed", "取證國家"] }), []);
  return (
    productTypes.filter(([type]) => Object.keys(cols).includes(type)).length > 0 && (
      <div className="page-rounded page-bd page-bg-white d-flex flex-column gap-3">
        <div className="px-sm-4 pt-sm-4 px-3 pt-3 fw-bold page-text-large d-flex align-items-center">
          <span className="material-symbols-outlined me-1">signal_cellular_alt</span>核心產品與進度
        </div>
        {productTypes.map(
          ([type, products]) =>
            Object.keys(cols).includes(type) && (
              <div key={type} className="graph" style={{ overflowX: "auto" }}>
                <Row>
                  {cols[type].map((colname) => (
                    <Cell key={colname} className="text-center page-text-white page-bg-third" children={colname} />
                  ))}
                </Row>
                {products?.map(({ name, progress, countries }) => (
                  <Row key={name} className="position-relative" style={{ "--progress": progress, "--cols": cols[type].length - 2 } as React.CSSProperties}>
                    <Cell children={name} />
                    {Array(cols[type].length - 2)
                      .fill(0)
                      .map((_, i) => (
                        <Cell key={`${name}-progress-${i}`} />
                      ))}
                    <Cell>{countries}</Cell>
                  </Row>
                ))}
              </div>
            )
        )}
      </div>
    )
  );
};

const Row: React.FC<{ children?: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
  <div className={`d-flex flex-nowrap ${className ? `${className}` : ""}`} style={style}>
    {children}
  </div>
);
const Cell: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => <div className={`cell p-2 fw-bold page-bd ${className ? `${className}` : ""}`}>{children}</div>;
