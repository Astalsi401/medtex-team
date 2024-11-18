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
  const closeModal = () => {};
  return (
    <>
      <div className="d-flex flex-column gap-2">
        <div>Error: {error}</div>
      </div>
      <a className="page-btn d-block p-3 mx-auto text-center fw-bold page-bd-primary page-bg-primary page-text-white" onClick={closeModal}>
        Close
      </a>
    </>
  );
};