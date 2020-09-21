import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Join from './compos/join'
import Chat from './compos/chat'
import './App.css';
const App =()=>(
  <BrowserRouter>
    <Route path='/' exact component={Join}/>
    <Route path="/chat" exact component={Chat}/>
  </BrowserRouter>
)
export default App;