import React,{useState,useRef} from 'react';
import AboutUs from '../aboutUs/AboutUs';
import AboutusMainSection from '../aboutusMainSection/aboutusMainSection';
import BelieveSection from '../believeSection/BelieveSection';
import Culture from '../culture/Culture';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import History from '../history/History';
import MainComponent from '../mainComponent/MainComponent';
import Query from '../query/Query';
import QueryModal from '../query/queryModal/QueryModal';
import "./aboutusSection.css"

function AboutusSection() {
  const [showQuery,setShowQuery]= useState(false)
  const myRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => {
    scrollToRef(myRef)};
    return (
        <div>
        <div className="section-bg">
          <Header scrollClicked={executeScroll} />
          <AboutusMainSection />
          <History />
          <Culture />
          <BelieveSection />
          <div ref={myRef}>
          {showQuery && <QueryModal closeModal={()=>{setShowQuery(prev=>false)}}/>}
          <Query isAboutus={true} showModal={()=>{setShowQuery(prev=>true)}} />
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default AboutusSection
