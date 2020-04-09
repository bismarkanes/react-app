import React from 'react';
import { connect, } from 'react-redux';

class About extends React.Component {
  render() {
    return (
      <div>
        <p>----- Start Page About -----</p>
        <p>This is about</p>
        <p>----- End Page About -----</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

export default connect(mapStateToProps)(About);
