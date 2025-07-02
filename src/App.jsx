import React, { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [property, setProperty] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${property}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  });
  return (
    <>
      <div>
        <button onClick={() => setProperty("Users")}>Users</button>
        <button onClick={() => setProperty("Posts")}>Posts</button>
        <button onClick={() => setProperty("Comments")}>Comments</button>
      </div>
      <h1>{property}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
