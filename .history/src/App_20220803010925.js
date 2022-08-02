import React from 'react'
import Searchbox from './component/Searchbox'
import './component/new.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  const myStyle={
};
  return (
    <div style={myStyle}>
      <Router>
      <Routes>
        <Route path="/" element={<Searchbox/>}/>
      </Routes></Router>
    </div>
  )
}
