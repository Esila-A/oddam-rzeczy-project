import React from 'react';
import {Route, Routes} from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/home";

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
