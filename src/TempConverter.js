import { useState } from "react";

function TempConverter() {
  const [temp, setTemp] = useState(0);
  const [mode, setMode] = useState("CtoF");

  function handleChange(e) {
    setTemp(e.target.value);
  }

  let convertedTemp = "";
  if (temp !== "") {
    const tempNump = parseFloat(temp);
    if (mode === "CtoF") {
      convertedTemp = (tempNump * 9) / 5 + 32;
    } else {
      convertedTemp = ((tempNump - 32) * 5) / 9;
    }
  }
  return (
    <>
      <h1>Temparature Converting Board</h1>
      <input type="number" value={temp} onChange={handleChange} />
      <br />
      <button onClick={() => setMode("CtoF")}>Celsius to Fahrenheit</button>
      <button onClick={() => setMode("FtoC")}>Fahrenheit to celsius</button>
      {temp !== "" && (
        <p>
          convertedTemperature:{convertedTemp.toFixed(2)}
          {""}
          {/* {mode === "CtoF" ? "°F" : "°C"} */}
          {mode === "CtoF" ? "\u00B0F" : "\u00B0C"}
        </p>
      )}
    </>
  );
}

export default TempConverter;
