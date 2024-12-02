import { useEffect } from "react";
import { getTeamInfo, getSearchParam } from "@functions";
import { useAppDispatch, useAppSelector, setState, pageTexts } from "@store";
import { Profile } from "@components/Profile";
import { Card } from "@components/Card";
import { Project } from "@components/Project";
import { Highlight } from "@components/Highlight";
import { CoreTech } from "@components/CoreTech";
import { Market } from "@components/Market";
import { CoreProducts } from "@components/CoreProducts";
import { MileStone } from "@components/MileStone";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { Modal } from "@components/Modal";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading);
  const error = useAppSelector((state) => state.error);
  const getData = async () => {
    const lang = "en"; // is_production() ? window.location.pathname.split("/")[1] : "zh";
    const data = await getTeamInfo(getSearchParam("teamId") || "03", lang);
    if (data.error) console.error(data.error);
    dispatch(setState({ loading: false, lang, ...(data.error ? { error: data.error } : { data }) }));
  };
  useEffect(() => {
    getData();
  }, []);
  return loading ? (
    <Loading />
  ) : error ? (
    <Modal />
  ) : (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

const Content: React.FC = () => {
  const teamId = useAppSelector((state) => state.data.teamId);
  const lang = useAppSelector((state) => state.lang);
  return (
    <div className="container-xxl py-5">
      <div className="row g-4">
        <div className="col-12 d-flex flex-lg-nowrap flex-wrap gap-sm-4 gap-3">
          <div className="left-content d-flex flex-column gap-sm-4 gap-3">
            <Profile />
            <Card />
          </div>
          <div className="right-content d-flex flex-column gap-sm-4 gap-3">
            <Project />
            <Highlight />
            <CoreTech />
            <Market />
            <CoreProducts />
            <MileStone />
          </div>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-center flex-wrap gap-3">
          <Button href="https://expo.taiwan-healthcare.org/zh/medtex/2024" className="page-btn fw-bold d-block p-3 text-center page-bd-primary page-bg-white page-text-primary">
            <i className="fa-solid fa-chevron-left me-3" />
            {pageTexts.viewStartupCompanyList[lang]}
          </Button>
          <Button href={`https://expo.taiwan-healthcare.org/zh/medtex/2024/form?teamId=${teamId}`} className="page-btn fw-bold d-block p-3 text-center page-bd-primary page-bg-primary page-text-white">
            {pageTexts.applyForMeeting[lang]}
            <i className="fa-solid fa-chevron-right ms-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const lang = useAppSelector((state) => state.lang);
  return (
    <header className="page-text-white text-small">
      <div>
        <img className="logo d-block" src="https://expo.taiwan-healthcare.org//data/tmp/20230928/20230928epf7fo.svg" alt="logo" />
        <div className="px-2">
          <div>{pageTexts.eventTime[lang]}</div>
          <div>{pageTexts.eventLocation[lang]}</div>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="w-100 d-flex align-items-center justify-content-center">
    <img src="https://expo.taiwan-healthcare.org//data/tmp/20241105/20241105l6xrm4.png" alt="" className="d-block" />
  </footer>
);
