import React, { useState } from 'react';
import { Route } from "react-router-dom";
import HomePage from '../pages/home/homePage';
import { ROUTES } from '../Routes';


function App(props : any) {
  
  const { DOMAINCOMPONENT, DOMAINPAGE, CREATEPAGE, CREATEACCOUNT, PROJECTCARD, COUNTCARD,
    ACCOUNTPAGE, PROJECTPAGE, PROJECTMODAL, ASSIGNCARD, CONVERSATIONTEXTCARD,
    NAVIGATIONCOMPONENT, TOTALCONVERSATION, ASSIGNEDPROJECT } = ROUTES
 const [token , setToken] = useState()
 
  return (    
    <div className='app-wrapper'>
       
      <Route exact path= "/">
       
       <HomePage />
      </Route>
       {/* <Route  exact  path="/Create">
       <Navigationbar/>
        <UserCredentialForm/>
       </Route> */}
       
    </div>
  );
}

export default App;
