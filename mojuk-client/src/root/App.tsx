import React from "react";
import Canvas from "./Canvas";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Canvas />
    </BrowserRouter>
  );
};

export default App;
