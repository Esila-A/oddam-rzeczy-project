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
        <Route path="oddam-rzeczy/" element={<Home />} />
        <Route path="oddam-rzeczy/sign-in" element={<SignIn />} />
        <Route path="oddam-rzeczy/sign-up" element={<SignUp />} />
        <Route path="oddam-rzeczy/sign-out" element={<SignOut />} />
        <Route path="oddam-rzeczy/hand-over" element={<HandOver />} />
      </Routes>
    </div>
  );
}

export default App;
