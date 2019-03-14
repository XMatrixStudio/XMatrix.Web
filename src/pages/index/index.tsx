import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import * as serviceWorker from '../../serviceWorker'
import Navbar from './components/navbar'
import About from './containers/about'
import Home from './containers/home'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
