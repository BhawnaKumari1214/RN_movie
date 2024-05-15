import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import { VariableProvider } from './utils/VariableContext.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/all/movies" element={<Home />} />
      <Route path="/top/movies" element={<Home />} />
      <Route path="/popular/movies" element={<Home />} />
      {/* <Route path="/movie/:movie_id" element={ <SingleMoviePage /> } /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    <VariableProvider>
      <App />
    </VariableProvider>
  </RouterProvider>,
)
