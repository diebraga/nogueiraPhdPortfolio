import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';
import Experience from './pages/Experience';
import Presentations from './pages/Presentations';
import Professional from './pages/Professional';
import Publications from './pages/Publications';
import Research from './pages/Research';
import About from './pages/About';

import Layout from './components/Layout';

const App = () => (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Experience' component={Experience} />
          <Route exact path='/Presentations' component={Presentations} />
          <Route exact path='/Professional' component={Professional} />
          <Route exact path='/Publications' component={Publications} />
          <Route exact path='/Research' component={Research} />
          <Route exact path='/CV' component={CV} />
          <Route exact path='/About' component={About} />

        </Switch>
      </Layout>
    </Router>
);

export default App;
