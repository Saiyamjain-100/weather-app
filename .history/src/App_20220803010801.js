import React from 'react'
import Searchbox from './component/Searchbox'
import './component/new.css'
import background1 from './component/background1.jpg'
import background2 from './component/background2.jpg'
import background3 from './component/background3.jpg'
import background4 from './component/background4.jpg'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  const myStyle={
    height:'100vh',
    marginTop:'-50px',
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
