import React from 'react';
import Navbar from './layout/Navbar';
import Main from './layout/Main';
import Login from './pages/Login';
import { BrowserRouter,Outlet } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter>
    <div className="social-media">
      <>
        <Login />
        {/* <Navbar />
        <Main /> */}

      </>
    </div>

  );
}

export default App;
