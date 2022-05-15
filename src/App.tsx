import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/AppBar/NavBar';
import { SideDrawer } from './components/SideDrawer/SideDrawer';
import { Home } from './pages/Home';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <div className="App">
    //       <NavBar/>
    //       <SideDrawer/>
    //     </div>  
    //   </Routes>
    // </Router>
    <Home/>
    
  );
}

export default App;
