import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/AppBar/NavBar';
import { SideDrawer } from './components/SideDrawer/SideDrawer';
import { Home } from './pages/Home';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#075E54" //teal green dark
      },
      secondary: {
        main: "#25D366" //light green
      }
    }
  })
  return (
    // <Router>
    //   <Routes>
    //     <div className="App">
    //       <NavBar/>
    //       <SideDrawer/>
    //     </div>  
    //   </Routes>
    // </Router>
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
    
  );
}

export default App;
