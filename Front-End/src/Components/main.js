import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import PostEntry from './PostEntry'

export default function Main(){
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/category/:id' component={Category}/>
        <Route path='/post-entry/:id' component={PostEntry}/>
      </Switch>
    </main>
  );
}