import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import "./Dailyroutine.css";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("daily_routine"))
  );

  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const submitItems = [...items, addNewItem];
    setItems(submitItems);
    localStorage.setItem("daily_routine", JSON.stringify(submitItems));
  };

  const [search, setSearch] = useState("");

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("daily_routine", JSON.stringify(listItems));
  };

  const handleClickk = (id) => {
    const deleteItems = items.filter((item) => item.id !== id);
    setItems(deleteItems);
    localStorage.setItem("daily_routine", JSON.stringify(deleteItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Daily_Rountine_Checklist" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />

      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleClickk={handleClickk}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
