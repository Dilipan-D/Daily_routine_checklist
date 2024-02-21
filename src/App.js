import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import './Dailyroutine.css';
import { useState } from 'react';
import AddItem from './AddItem';


function App() {
  const [items, setItems] = useState([{
    id:1,
    checked:false,
    item: "Cycling for one hour"
},
{
    id:2,
    checked:false,
    item: "Cook healthy foods"
},
{
    id:3,
    checked:false,
    item: "Arrive at the office fifteen minutes early"
},
{
    id:4,
    checked:false,
    item: "Evening or Morning - Do exercise for forty five minutes "
},
{
    id:5,
    checked:false,
    item: "Enhance skills through dedicated practice"
},
{
    id:6,
    checked:true,
    item: "Read any books for thirty minutes"
},
{
    id:7,
    checked:false,
    item: "Six hours sleep"
}

]);

const [newItem, setNewItem] = useState ('')

const addItem = (item) => {
  const id = items.length ? items[items.length - 1 ].id + 1 : 1;
  const addNewItem = {id, checked: false, item}
  const submitItems = [...items, addNewItem]
  setItems(submitItems)
  localStorage.setItem("daily_routine", JSON.stringify(submitItems))
}

const handleCheck = (id) => {
    const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item)
    setItems(listItems)
    localStorage.setItem("daily_routine", JSON.stringify(listItems))
    }

const handleClickk = (id) =>{
    const deleteItems = items.filter((item) => item.id!==id) 
    setItems(deleteItems)
    localStorage.setItem("daily_routine", JSON.stringify(deleteItems))
}

const handleSubmit = (e) => {
  e.preventDefault()
    if (!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem ('')
}
 
  return (
    <div className= "App">
      <Header  
        title="Daily_Rountine_Checklist"
      
      />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit= {handleSubmit}
      />

      <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleClickk = {handleClickk}
      />
      <Footer 
        length = {items.length}
      />
    </div>
      
  );
}

export default App;
