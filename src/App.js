import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
 import About from './Components/About';
 import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) =>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
    
  } 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
   document.body.style.backgroundColor = "#212529";
   showAlert("Dark mode has been enabled", "success");
  //  document.title="Dark mode";
  //  If we write this then it will write into title.....just for better knowledge but not user experience
      
    }
    else{
      setMode('light');
   document.body.style.backgroundColor = "white";
   showAlert("Light mode has been enabled", "success");            
    }
  
  }

  return (
   <> 
<Router>
<Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}  />
<Alert alert={alert}/>
<div className="container my-3">
<Switch>

          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to anylize below" mode={mode}/> 
          </Route>

          <Route exact path="/about">
          <About mode={mode}></About>
          </Route>

          
</Switch>
        </div>
        </Router>
        </>
  );
}

export default App;
