import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector, } from 'react-redux';
import { appTitle, appDescription, } from 'config';
import CustomRoute from 'components/customroute';
import { ContainerBase } from 'container-base';
import Progress from 'components/progress';
import { ExtraLarge, } from 'components/base/P';
import Landing from 'containers/pages/landing';

const App = () => {
  const progress = useSelector((state) => state.global.progress);

  if (progress.isLoading) {
    console.log('isLoading', progress.isLoading);
  } else {
    console.log('isLoading', progress.isLoading);
  }

  return (
    <div className='App'>
      <Helmet
        titleTemplate={`%s - ${appTitle}`}
        defaultTitle={appTitle}
      >
        <meta name='description' content={appDescription} />
      </Helmet>
      {progress.isLoading ? <Progress/> : null }
      <Router>
        <Switch>
          <CustomRoute
            isRedirected={false}
            exact
            render={props => <Landing {...props} />}
            path='/'
          />

          <Route path='/404' component={() => {
            return (
              <ContainerBase height="100vh" justify="center">
                <ExtraLarge>Not Found</ExtraLarge>
              </ContainerBase>
            );
          }} />
          <Redirect to='/404' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
