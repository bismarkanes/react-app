import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
import Headers from './components/headers';
import Footers from './components/footers';
import Home from './containers/pages/home';
import About from './containers/pages/about';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Headers />
          <ScrollMemory />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Footers />
        </Router>
      </div>
    );
  }
}

export default App;
