import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Sports from './Sports'

export default function Main(){
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/sports' component={Sports}/>
      </Switch>
    </main>
  );
}