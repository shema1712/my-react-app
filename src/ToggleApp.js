import { useState } from "react";

function ToggleApp() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <h1>Toggle Event App</h1>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <p>Hello! I am visible now.</p>}
    </>
  );
}
export default ToggleApp;
