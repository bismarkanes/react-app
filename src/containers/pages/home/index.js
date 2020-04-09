import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHomeContentRequest, } from '../../../redux/actions/homecontent';

class Home extends React.Component {
  state = {
    homeContent: null,
  }

  static getDerivedStateFromProps = (props, state) => {
    const { homeContent } = props;

    if (homeContent !== state.homeContent && !homeContent.isLoading) {
      console.log('homeContent:', homeContent);
      return { homeContent, };
    }

    return null;
  }

  componentDidMount() {
    this.props.getHomeContentRequest({ name: 'bismark', email: 'bismark@embreo.co' });
  }

  render() {
    return (
      <div>
        <p>----- Start Page Home -----</p>
        <p>{this.props.homeContent.isLoading ? 'Loading...' : 'This is home' }</p>
        <p>----- Start Page Home -----</p>
      </div>
    );
  }
}

Home.propTypes = {
  homeContent: PropTypes.object,
  getHomeContentRequest: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  return {
    homeContent: state.homeContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeContentRequest: (param) => dispatch(getHomeContentRequest(param)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
