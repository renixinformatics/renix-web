import React from 'react';
import { Route } from "react-router-dom";
import AboutUs from '../components/aboutUs/AboutUs';
import AboutusSection from '../components/aboutusSection/aboutusSection';
import HomePage from '../pages/home/homePage';



function App(props : any) {
 
  return (    
    <div className='app-wrapper'>
       
      <Route exact path= "/">
       
       <HomePage />
      </Route>
      <Route exact path="/aboutus">
      <AboutusSection />
      </Route>
       {/* <Route  exact  path="/Create">
       <Navigationbar/>
        <UserCredentialForm/>
       </Route> */}
       
    </div>
  );
}

export default App;
