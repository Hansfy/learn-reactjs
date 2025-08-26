import React, { useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: "" });

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity) {
      setItems([...items, { name: newItem.name, quantity: newItem.quantity }]);
      setNewItem({ name: "", quantity: "" });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  return (
    <div>
      <h2>Shopping List:</h2>
      {items.length === 0 ? (
        <p>No data available</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <form>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
          placeholder="Nama item"
        />
        <input
          type="number"
          name="quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
          placeholder="Kuantitas"
        />
        <button type="button" onClick={handleAddItem}>
          Tambah Item
        </button>
      </form>
    </div>
  );
}

export default ShoppingList;
