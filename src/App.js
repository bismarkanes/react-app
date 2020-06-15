import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Headers from './components/headers';
import Footers from './components/footers';
import Home from './containers/pages/home';
import About from './containers/pages/about';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet
          titleTemplate={`%s - ${process.env.REACT_APP_META_SITE_TITLE}`}
          defaultTitle={process.env.REACT_APP_META_SITE_TITLE}
        >
          <meta name="description" content={process.env.REACT_APP_META_SITE_DESCRIPTION} />
        </Helmet>
        <Headers />
        <Router>
          <Link className="menu-item" to="/">/</Link>
          <Link className="menu-item" to="/home">Home</Link>
          <Link className="menu-item" to="/about">About</Link>

          <Switch>
            <Redirect exact path="/" to="/home" />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
        <Footers />
      </div>
    );
  }
}

export default App;
