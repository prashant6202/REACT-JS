import { Fragment, useEffect, useState } from "react";
export default function Collections() {
  const [data, setData] = useState({ name: "", price: 0 });
  const [items, setItems] = useState([]);
  const handleNameClick = (e) => {
    setData({ ...data, name: e.target.value });
  };
  const handlePriceClick = (e) => {
    setData({ ...data, price: e.target.value });
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, data]);
    setData({ name: "", price: 0 });
  };
  useEffect(() => {
    let total = 0;
    for (let item of items) {
      total = total + Number(item.price);
    }
    let strongTag = document.getElementsByTagName("strong");
    strongTag[1].innerHTML = total;
  });

  return (
    <Fragment>
      <h1>Shopping App</h1>
      <form onSubmit={addItem}>
        Type item name:
        <br />
        <input type="text" value={data.name} onChange={handleNameClick} />
        <br />
        Type item price:
        <br />
        <input type="number" value={data.price} onChange={handlePriceClick} />
        <br />
        <button type="submit">Add Item</button>
      </form>
      <table border="2">
        <thead>
          <tr>
            <th>Name</th> <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        total items: <strong>{items.length}</strong> Cart Total:
        <strong>
          0
          {/* items.reduce((total, item) => total + parseInt(item.price), 0) */}
        </strong>
      </p>
    </Fragment>
  );
}
