import { useAppSelector, pageTexts } from "@store";

export const Project: React.FC = () => {
  const { company, region, mainInvester } = useAppSelector((state) => state.data);
  const lang = useAppSelector((state) => state.lang);
  return (
    <div className="page-rounded page-bd page-bg-white p-sm-4 p-3 d-flex flex-column gap-3">
      <div className="fw-bold page-text-xxx-large">{company}</div>
      <div>
        <span className="d-lg-inline d-flex align-items-center align-self-stretch gap-1 me-3">
          <span className="material-symbols-outlined me-1">location_on</span>
          <span>{region}</span>
        </span>
        <span className="d-lg-inline d-flex align-items-center align-self-stretch gap-1">
          <span className="material-symbols-outlined me-1">paid</span>
          <span className="me-1 fw-bold" style={{ width: "max-content" }}>
            {pageTexts.leadInvestor[lang]}
          </span>
          <span style={{ flex: "1 0 0" }}>{mainInvester}</span>
        </span>
      </div>
    </div>
  );
};
