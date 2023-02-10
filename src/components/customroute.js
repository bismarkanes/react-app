import React from 'react';
import { Route, Redirect, } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomRoute = (props) => {
  if (!props.isRedirected)
    return (
      <Route
        {...props}
      />
    );

  return <Redirect to={props.routeRedirection}/>;
};

/*
 * isRedirected - whether redirect to routeRedirection
 * routeRedirection - target url redirection
 */
CustomRoute.propTypes = {
  isRedirected: PropTypes.bool,
  routeRedirection: PropTypes.string,
};

CustomRoute.defaultProps = {
  isRedirected: false,
  routeRedirection: '/login',
};

export default CustomRoute;
