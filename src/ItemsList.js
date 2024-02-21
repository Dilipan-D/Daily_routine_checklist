import React from 'react'
import LineList from './LineList';

const Itemslist = ({items, handleCheck, handleClickk}) => {
  return (
    <ul>
    {items.map((item) => (
        <LineList 
        item = {item}
        key={item.id}
        handleCheck = {handleCheck}
        handleClickk = {handleClickk}
        />

    ))}
</ul>
  )
}

export default Itemslist