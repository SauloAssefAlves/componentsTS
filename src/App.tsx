import { useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import { FaChevronDown } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <Inputs
            label="label"
            options={[{ label: "option", value: 1 }]}
            icon={<FaChevronDown />}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
