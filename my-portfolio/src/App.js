import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';
import Intro from './showElements/Intro';
import  NavBar from './showElements/NavBar';
import Projects from './showElements/projects/Projects';
import Educations from './showElements/Educations/Educations';
import Languages from './showElements/Languages/Languages';
import Certificates from './showElements/Certificates/Certificates';
import Works from './showElements/Works/Works';
import Footer from './showElements/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      
      <NavBar/>

        <Switch>
          <Route exact path="/">
            <Intro/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/education">
            <Educations/>
          </Route>
          <Route path="/languages">
            <Languages/>
          </Route>
          <Route path="/certificates">
            <Certificates/>
          </Route>
          <Route path="/works">
            <Works/>
          </Route>
        </Switch>
    </Router>
      <Footer/>
    </div>
  );
}

export default App;
