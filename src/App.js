import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Germany from "./Pages/Germany";
import GermanyStep2 from "./Pages/GermanyStep2";
import GermanyStep3 from "./Pages/GermanyStep3";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          {/* <Route path="/appointment" element={<Appointment />} /> */}
          <Route path="/germany" element={<Germany />} />
          <Route path="/germany/step2" element={<GermanyStep2 />} />
          <Route path="/germany/step3" element={<GermanyStep3 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
