import _ from "lodash";
import { useMemo } from "react";
import { useAppSelector, pageTexts } from "@store";

export const CoreProducts: React.FC = () => {
  const { coreProducts } = useAppSelector((state) => state.data);
  const lang = useAppSelector((state) => state.lang);
  const productTypes = useMemo(() => Object.entries(_.groupBy(coreProducts, (p) => p.type)), [coreProducts]);
  const cols = useMemo<{ [key: string]: string[] }>(() => ({ device: ["", "Prototype", "Pre-Clinical", "Clinical", pageTexts.marketed[lang], pageTexts.markets[lang]], drug: ["", "Pre-Clinical", "Pre-IND", "IND", "Clinical", pageTexts.marketed[lang], pageTexts.markets[lang]] }), []);
  return (
    productTypes.filter(([type]) => Object.keys(cols).includes(type)).length > 0 && (
      <div className="page-rounded page-bd page-bg-white d-flex flex-column gap-3">
        <div className="px-sm-4 pt-sm-4 px-3 pt-3 fw-bold page-text-large d-flex align-items-center">
          <span className="material-symbols-outlined me-1">signal_cellular_alt</span>
          {pageTexts.coreProductDevelopmentStage[lang]}
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
                {products &&
                  products.map(({ name, progress, countries }) => (
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
