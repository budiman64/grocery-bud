import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import Items from "./Items";

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]'); 

const App = () => {
  const [items, setItems] = useState(defaultList);
  
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  }

  const removeItem = (itemId) => {
    const newList = items.filter((item) => item.id !== itemId);
    setItems(newList)
    setLocalStorage(newList);
  }

  const editItem = (itemId) => {
    const newList = items.map((item) => {
      if(item.id === itemId) {
        const newItem = {...item, completed: !item.completed}
      return newItem 
    } 
      return item
    })
    setItems(newList)
    setLocalStorage(newList);
  }

  return <section className="section-center">
    <ToastContainer position='top-center'/>
    <Form addItem={addItem} />
    <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>;
};

export default App;
