import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Router>
          <Headers />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Footers />
        </Router>
      </div>
    );
  }
}

export default App;
