import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3700b3" //teal green dark
      },
      secondary: {
        main: "#6200ee" //light green
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
