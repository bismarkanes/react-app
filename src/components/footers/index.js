import React from 'react';
import Img from 'react-image';
import embreoWhite from './../../assets/images/comp-logo.png';
import fb from './../../assets/images/fb.png';
import insta from './../../assets/images/insta.png';

class Headers extends React.Component {
  state = {
  }

  render() {
    return (
      <section className="hero mainfooter two-section-padding">
        <div className="columns is-gapless is-vcentered columns-no-padding">
          <div className="column is-6 has-text-centered">
            <div className="footer-left-wrapper">
              <div className="has-text-left has-text-white is-inline-block">
                <div className="mobile-center">
                  <Img src={embreoWhite}/>
                </div>
                <div className="basic-heading text-block mobile-center">
                  <div className="is-inline-block text-block">
                    <p>Donec posuere</p>
                  </div>
                  <div className="is-inline-block text-block">
                    <p>Curabitur lacinia</p>
                  </div>
                </div>
                <div className="basic-heading">
                  <p>Mauris mollis tincidunt felis</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-6 has-text-centered">
            <div className="footer-right-wrapper">
              <div className="horizontal-icon">
                <Img src={fb} />
              </div>
              <div className="horizontal-icon">
                <Img src={insta} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Headers;
