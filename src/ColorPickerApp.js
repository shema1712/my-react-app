import { useState } from "react";

function ColorPickerApp() {
  const [color, setColor] = useState("red");
  const [favorite, setFavorite] = useState([]);
  function handleColor(e) {
    setColor(e.target.value);
  }
  function handleFavoriteColor() {
    if (!favorite.includes(color)) {
      setFavorite([...favorite, color]);
    }
  }
  return (
    <>
      <div>
        <h1 style={{ color }}>Hello World</h1>
        <input type="color" value={color} onChange={handleColor} />
        <button onClick={handleFavoriteColor}>Add to Favorites</button>
      </div>
    </>
  );
}
export default ColorPickerApp;
