
import React, { useState } from "react";
import "./App.css"; // Optional: If you want to manage styles in a separate file

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a valid item.");
      return;
    }

    // Add the new item to the items array
    setItems([...items, inputValue.trim()]);
    setInputValue(""); // Clear the input field
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Item List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
        style={styles.input}
      />
      <button onClick={handleAddItem} style={styles.button}>
        Add Item
      </button>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  input: {
    width: "calc(100% - 20px)",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    backgroundColor: "#f9f9f9",
    margin: "5px 0",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

export default ItemListManager;