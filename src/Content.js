import React from 'react'
import { useState } from 'react';
import { FaTrashCan } from "react-icons/fa6";

const Content = () => {
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

  return (
    <main>
        {(items.length) ? (
        <ul>
            {items.map((item) => (
                <li className= "hero" key={item.id}>
                <input
                    type ="checkbox"
                    onChange={() => handleCheck(item.id)}
                    checked = {item.checked} 
                />
                <label 
                style={(item.checked) ? {textDecoration: 'line-through'} : null}  
                onDoubleClick={() => handleCheck(item.id)}
                    checked = {item.checked} >{item.item}</label>

                <FaTrashCan 
                    role="button"
                    tabIndex="0"
                    onClick={() => handleClickk(item.id)}
                />
                </li>
            ))}
        </ul>) : (
            <p><strong>Great, you done excellently</strong></p>
        )}
    
    </main>
  )
}

export default Content