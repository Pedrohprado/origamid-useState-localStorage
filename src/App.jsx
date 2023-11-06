import React from "react";
import Products from "./components/Products";

import "./App.css";

function App() {
  const [value, setValue] = React.useState(null);

  React.useEffect(() => {
    const localProduct = window.localStorage.getItem("produto");
    localProduct !== null ? setValue(localProduct) : null;
  }, []);

  React.useEffect(() => {
    if (value !== null) window.localStorage.setItem("produto", value);
  }, [value]);

  const handleClick = (e) => {
    setValue(e.target.innerText);
  };

  return (
    <>
      <div>
        <h1>Preferência : {value}</h1>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>
        <Products produto={value} />
      </div>
    </>
  );
}

export default App;
