import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './tailwind.global.css'

import Home from './pages/home/index'
import Header from './components/home/header'
import SecondaryHeader from './components/home/SecondaryHeader'

function App () {
  return (
    <Router>      <Header />
      <SecondaryHeader/>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
