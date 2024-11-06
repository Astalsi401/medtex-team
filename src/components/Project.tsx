import { useAppSelector } from "@store";

export const Project: React.FC = () => {
  const { project, company, region, mainInvester } = useAppSelector((state) => state.data);
  return (
    <div className="page-rounded page-bd page-bg-white p-4 mb-4">
      <div className="my-3 fw-bold page-text-x-large">{project}</div>
      <div className="my-3 page-text-large">{company}</div>
      <div className="my-3">
        <span className="d-lg-inline d-flex align-items-center align-self-stretch gap-1 me-3">
          <span className="material-symbols-outlined me-1">location_on</span>
          <span>{region}</span>
        </span>
        <span className="d-lg-inline d-flex align-items-center align-self-stretch gap-1">
          <span className="material-symbols-outlined me-1">paid</span>
          <span className="me-1 fw-bold" style={{ width: "max-content" }}>
            主要投資人
          </span>
          <span style={{ flex: "1 0 0" }}>{mainInvester}</span>
        </span>
      </div>
    </div>
  );
};
