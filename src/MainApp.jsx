import React, { useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import endpoints from './constants/endpoints';

function MainApp() {
  useEffect(() => {
    fetch(endpoints.routes, {
      method: 'GET',
    })
      .then((res) => res.json())
      .catch((err) => err);
  }, []);

  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/education" component={Education} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
