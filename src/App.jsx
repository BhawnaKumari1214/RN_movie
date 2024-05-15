import React from 'react';

import Home from './Pages/Home/Home';
import Navbar from './component/Header/Navbar';
import Layout from './Layout';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

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


// function App() {

//   return (
//     // <BrowserRouter>
//     //    <Layout />
//     //    <Routes path='/' element={ <Home />} >
//     //       <Route path='/all' element={<Carousel />} />
//     //    </Routes>
//     // </BrowserRouter>
//   )
// }