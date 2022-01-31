import React from 'react';
import {Route, Routes} from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/home";
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
