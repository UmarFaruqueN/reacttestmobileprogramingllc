import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomeScreen, Usecase1Screen1, Usecase1Screen2, Usecase2Screen1 } from "./containers";
import { Header } from "./components";

function App() {
     return (
          <>
               <Header />
               <Routes>
                    <Route exact path="/" element={<HomeScreen />} />
                    <Route exact path="/usecase1Screen1" element={<Usecase1Screen1 />} />
                    <Route exact path="/usecase1Screen2" element={<Usecase1Screen2 />} />
                    <Route exact path="/usecase2Screen1" element={<Usecase2Screen1 />} />
               </Routes>
          </>
     );
}

export default App;


