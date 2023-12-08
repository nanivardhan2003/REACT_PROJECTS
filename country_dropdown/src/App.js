import React, { useState } from "react";
import "./styles.css";
import ReactFlagsSelect from "react-flags-select";
import "./flags.css";
export default function App() {
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);
  console.log("SELECT", select);
  return (
    <div className="App">
      <div className="topnav">
        <h1>Countries</h1>
        <div className="country_dropdown">
          <ReactFlagsSelect
            selected={select}
            onSelect={onSelect}
            countries={["SG","IN" ,"GB", "IT", "US"]}
            selectedSize={14}
          />
        </div>
      </div>
    </div>   
  );
}