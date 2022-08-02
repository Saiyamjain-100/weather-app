import React from 'react'
import Searchbox from './component/Searchbox'
import './component/new.css'
import background1 from './component/background.jpg'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  const myStyle={
    backgroundImage: `url(${background1})`,
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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
