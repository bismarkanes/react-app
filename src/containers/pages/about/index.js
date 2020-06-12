import React from 'react';
import { connect, } from 'react-redux';

class About extends React.Component {
  render() {
    return (
      <div>
        <p>This is about</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

export default connect(mapStateToProps)(About);
