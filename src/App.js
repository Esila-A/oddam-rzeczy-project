import React from 'react';
import {Route, Routes} from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/home";
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";
import SignOut from './components/sign-out';
import HandOver from './components/hand-over';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/oddam-rzeczy-project" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/hand-over" element={<HandOver />} />
      </Routes>
    </div>
  );
}

export default App;
