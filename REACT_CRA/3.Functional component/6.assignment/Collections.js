import { useState } from "react";
export default function Collections() {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const handleClick = (e) => {
    setData(e.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, data]);
    setData("");
  };
  return (
    <div>
      <h1>Shopping App</h1>
      <form onSubmit={addItem}>
        Type item name:
        <br />
        <input type="text" value={data} onChange={handleClick} />
        <br />
        <button type="submit">Add Item</button>
      </form>
      <h2>Your Shopping cart :{items.length === 0 && "Empty"}</h2>
      <ol>
        {items.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ol>
    </div>
  );
}
