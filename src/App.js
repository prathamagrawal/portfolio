import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { socialsData } from './data/socialsData'
import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'
import resume from './assets/pdf/Resume.pdf'
import aihealthcare from './assets/pdf/paper1.pdf'
import googlcloud from './assets/pdf/GoogleCloudCert.pdf'
import ml_cvd from './assets/pdf/ML_CVD_IEEE.pdf'
import './App.css'


function App() {

  const { theme } = useContext(ThemeContext);

  console.log("%cPratham Agrawal", `color:${theme.primary}; font-size:50px`);
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
          <Route path='/journal' component={() => { window.location.href = aihealthcare; return null;}}/>
          <Route path='/mlpaper' component={() => { window.location.href = ml_cvd; return null;}}/>
          <Route path='/resume' component={() => { window.location.href = resume; return null;}}/>
          <Route path='/github' component={() => { window.location.href = socialsData.github; return null;}}/>
          <Route path='/linkedin' component={() => { window.location.href = socialsData.linkedIn; return null;}}/>
          <Route path='/instagram' component={() => { window.location.href = socialsData.instagram; return null;}}/>
          <Route path='/twitter' component={() => { window.location.href = socialsData.twitter; return null;}}/>
          <Route path='/medium' component={() => { window.location.href = socialsData.medium; return null;}}/>
          <Route path='/phone' component={() => { window.location.href = socialsData.phone; return null;}}/>
          <Route path='/kaggle' component={() => { window.location.href = socialsData.kaggle; return null;}}/>
          <Route path='/mail' component={() => { window.location.href = socialsData.mail; return null;}}/>
          <Route path='/meet' component={() => { window.location.href = "https://meet.google.com/hva-ofdd-fdy"; return null;}}/>
          <Route path='/codechef' component={() => { window.location.href = socialsData.codechef; return null;}}/>
          <Route path='/leetcode' component={() => { window.location.href = socialsData.leetcode; return null;}}/>
          <Route path='/pypi' component={() => { window.location.href = socialsData.pypi; return null;}}/>
          <Route path='/gcp' component={() => { window.location.href = googlcloud; return null;}}/>
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
