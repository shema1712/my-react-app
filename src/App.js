import { useState, useEffect } from "react";
function NameboardUpdate() {
  const [Name, setName] = useState(() => {
    return localStorage.getItem("Name") || " ";
  });

  useEffect(() => {
    localStorage.getItem("Name", Name);
  }, [Name]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={Name}
        onChange={handleChange}
        placeholder="Enter Your Name"
      ></input>
      <p>Hello {Name} Welcome!</p>
    </>
  );
}
export default NameboardUpdate;
