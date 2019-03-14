import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import logo from '../../../assets/logo.svg'
import './navbar.less'

@observer
class Navbar extends Component<any, any> {
  @observable
  public scrollValue = 0

  public componentDidMount() {
    window.addEventListener(
      'scroll',
      action(() => {
        this.scrollValue = window.scrollY
      })
    )
  }

  public render() {
    return (
      <div className="comp-nav">
        <div className={this.scrollValue > 30 ? 'nav' : 'nav-top'}>
          <div className="title">
            <img src={logo} className="logo-img" /> XMatrix
          </div>
          <div className="right-box">
            <NavLink to="/" exact={true} className="nav-item" activeClassName="nav-selected">
              Home
            </NavLink>
            <NavLink to="/about" exact={true} className="nav-item" activeClassName="nav-selected">
              About
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)
