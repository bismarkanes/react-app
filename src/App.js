import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Headers from './components/headers';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import About from './components/pages/about';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Headers />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

export default App;
