import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Category from './Category'

export default function Main(){
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/category/:id' component={Category}/>
      </Switch>
    </main>
  );
}