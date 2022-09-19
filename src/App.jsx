import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Home.jsx';
import Comic from './Comic.jsx';
import Chapter from './Chapter.jsx';
import Navigation from './Navigation.jsx';

export default function App() {
  return (
    <BrowserRouter basename={"comics"}>
      <Navigation/>
      <Routes>
        <Route index element={<Home/>}>
          </Route>
        <Route path="/:comic" element={<Comic/>}>
          </Route>
        <Route path="/:comic/:chapter" element={<Chapter/>}>
          </Route>
        <Route path="*" element={<h1> PAGE NOT FOUND :( </h1>}>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}
