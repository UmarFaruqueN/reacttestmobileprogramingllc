
import React from "react";
import { Routes, Route } from "react-router-dom";

import {HomeScreen ,Usecase1Screen1,Usecase1Screen2,Usecase2Screen1} from './containers'

function App() {
  return (
    <Routes>
<Route exact path="/" element={<HomeScreen/>} />
<Route exact path="/usecase1Screen1" element={<Usecase1Screen1/>} />
<Route exact path="/usecase1Screen2" element={<Usecase1Screen2/>} />
<Route exact path="/usecase2Screen1" element={<Usecase2Screen1/>} />
    </Routes>
  );
}

 export default App;

//  } from "./homeScreen";
// export { default as Usecase1_Screen1 } from "./";
// export { default as Usecase1_Screen2 } from "./usecase1Screen2";
// export { default as Usecase2_Screen1 } from "./usecase2Screen1";