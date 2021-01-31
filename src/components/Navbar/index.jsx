import React, { Component } from 'react'
import './style.scss'

import Logo from './img/logo.png'

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showChild: false
    }
  }
  
  render() {
    return (
      <div className="nav-container">
        <div className="left">
          <div className="logo">
            <img src={Logo}/>
          </div>
          <div className="title">Rose Barrett</div>
        </div>

        <div className="buttons">
          <div className="item" onMouseOver={this.enter} onMouseOut={this.leave}>
            <span>Activity</span>
            <div className="children">
              <div className="child">
                <div className="active"/>
                <span>生日</span>
              </div>
              <div className="child">
                <div className="active"/>
                <span>留言板</span>
              </div>
            </div>
          </div>
          <div className="item"><span>News</span></div>
          <div className="item"><span>Intro</span></div>
          <div className="item"><span>Creative team</span></div>
        </div>
      </div>
    )
  }
}
