import React from 'react';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './component/Header/Navbar';
import Layout from './Layout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route path="/" element={<Home/>} />
            {/* <Route path="#" element={<Layout/>} />
            <Route path="#" element={<Layout/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
