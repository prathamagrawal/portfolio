import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { socialsData } from './data/socialsData'
import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  const { theme } = useContext(ThemeContext);

  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          
          <Route path='/github' component={() => { window.location.href = socialsData.github; return null;}}/>
          <Route path='/linkedin' component={() => { window.location.href = socialsData.linkedin; return null;}}/>
          <Route path='/instagram' component={() => { window.location.href = socialsData.instagram; return null;}}/>
          <Route path='/twitter' component={() => { window.location.href = socialsData.twitter; return null;}}/>
          <Route path='/medium' component={() => { window.location.href = socialsData.medium; return null;}}/>
          <Route path='/phone' component={() => { window.location.href = socialsData.phone; return null;}}/>
          <Route path='/kaggle' component={() => { window.location.href = socialsData.kaggle; return null;}}/>
          <Route path='/mail' component={() => { window.location.href = socialsData.mail; return null;}}/>



          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
