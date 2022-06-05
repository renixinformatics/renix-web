import React, { useRef } from "react";
// import Button from '../../components/button/button';
import { useSelector, useDispatch } from "react-redux";
import {  getButtonData } from "../../actions/homeActions";
import AboutUs from "../../components/aboutUs/AboutUs";
import Expertise from "../../components/expertise/Expertise";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainComponent from "../../components/mainComponent/MainComponent";
import ProjectsComponent from "../../components/projects/ProjectsComponent";
import Query from "../../components/query/Query";
import { IAppState } from "../../store/store";
// import { CircularProgress } from '@material-ui/core';
import "./homePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: IAppState) => state.homeState.loading);

  const myRef = useRef(null);
  const scrollToRef = (ref:any) => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => {
    scrollToRef(myRef)};

  const errorMessage = useSelector(
    (state: IAppState) => state.homeState.errorMessage
  );

  return (
    <div
      onClick={() => {
        // dispatch(loadHomeAction(true));
        dispatch(getButtonData("priya"));
      }}
    >
      <div className="section-bg">
        <Header scrollClicked={executeScroll} />
        <MainComponent scrollClicked={executeScroll}/>
        <AboutUs />
      </div>
      <ProjectsComponent />
      <Expertise />
      <div ref={myRef}>
      <Query/>
      </div>
      <Footer />
      {errorMessage && !loading ? <span>Error</span> : ""}
    </div>
  );
};

export default HomePage;
