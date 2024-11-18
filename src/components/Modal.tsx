import { useAppSelector } from "@store";

export const Modal: React.FC = () => {
  return (
    <div className="dialog">
      <div className="d-flex flex-column p-4 gap-5 page-bg-white page-rounded text-center">{<Error />}</div>
    </div>
  );
};

const Error: React.FC = () => {
  const error = useAppSelector((state) => state.error);
  const lang = useAppSelector((state) => state.lang);
  const closeModal = () => window.history.back();
  return (
    <>
      <div className="d-flex flex-column gap-2">
        <div className="page-text-xx-large fw-bold">Error</div>
        <div>{error}</div>
      </div>
      <a className="page-btn d-block p-3 mx-auto text-center fw-bold page-bd-primary page-bg-primary page-text-white" onClick={closeModal}>
        {lang == "zh" ? "返回" : "Close"}
      </a>
    </>
  );
};
