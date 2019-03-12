import React, { Component } from 'react'

import logo from '../../../../assets/logo.svg'
import './navbar.css'

class Navbar extends Component<{}, {}> {
  public render() {
    return (
      <div>
        <img src={logo} className="logo" /> XMatrix
      </div>
    )
  }
}

export default Navbar
