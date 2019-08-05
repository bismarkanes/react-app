import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from 'react-image';
import topLogo from '../../assets/images/top-logo.png';
import topLogoMenu from '../../assets/images/top-logo-menu.png';
import './style.css';

class Headers extends React.Component {
  state = {
    active: false,
  }

  onClickMenuButton = (e) => {
    this.setState({
      active: !this.state.active,
    });
  }

  onClickMenuItem = (e) => {
    this.setState({
      active: false,
    });
  }

  render() {
    return (
      <section className="hero menu-container">
        <div onClick={this.onClickMenuItem} className={`bg-color-red ${this.state.active ? 'main-menu is-active' : 'main-menu'}`}>
          <div style={{ lineHeight: '2rem', }} className="color-grey-menu">
            <div style={{ paddingRight: '1rem', paddingBottom: '0.5rem', }}>
              <p style={{ padding: '0.2rem' }} onClick={this.onClickMenuItem} className="is-size-4 is-inline">x</p>
            </div>

            <NavLink activeClassName="nav-active" className="nav-item is-inline" onClick={this.onClickMenuItem} to="/about">
              <span className="is-size-5">About</span>
            </NavLink>
            <br/>

          </div>

          <div onClick={this.onClickMenuItem} style={{ right: 'unset', }} className="button-wrapper top-logo">
            <NavLink activeClassName="nav-active" draggable="false" to="/">
              <Img src={topLogoMenu}/>
            </NavLink>
          </div>

          <div onClick={this.onClickMenuItem} style={{ right: 'unset', }} className="button-wrapper top-logo top-social-link">
          </div>
        </div>

        <div className="button-wrapper">
          <div onClick={this.onClickMenuButton} className="nav-button">
            <div className="bar-wrapper">
              <div className="bar-menu-base bg-color-red bar-menu-line-1"></div>
            </div>
            <div className="bar-wrapper">
              <div className="bar-menu-base bg-color-red bar-menu-line-2"></div>
            </div>
          </div>
        </div>

        <div style={{ zIndex: '1', right: 'unset', }} className="button-wrapper top-logo">
          <NavLink activeClassName="nav-active" draggable="false" to="/">
            <Img draggable="false" src={topLogo}/>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default Headers;
