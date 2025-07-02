import react, { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>{value}</h2>
      <button
        className="b1"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
      <button className="b2" onClick={() => setValue(value - 1)}>
        Decrement
      </button>
      <button className="b3" onClick={() => setValue(0)}>
        Reset
      </button>
    </div>
  );
}
