import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
import Headers from './components/headers';
import Footers from './components/footers';
import Home from './components/pages/home';
import About from './components/pages/about';
import DINProLight from './assets/fonts/DINPro-Light.ttf';
import DINProBold from './assets/fonts/DINPro-Bold.ttf';

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
        <style>{
          `
            @font-face {
              font-family: DINPro;
              src: url(${DINProLight});
            }
            @font-face {
              font-family: DINPro;
              src: url(${DINProBold});
              font-weight: bold;
            }

            body, button, input, select, textarea {
              font-family: DINPro;
            }
          `
        }
        </style>
      </div>
    );
  }
}

export default App;
