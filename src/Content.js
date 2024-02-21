import React from 'react'
import ItemsList from './ItemsList'

const Content = ({items, handleCheck, handleClickk}) => {
   

  return (
    <main>
        {(items.length) ? (
        <ItemsList 
        items = {items}
        handleCheck = {handleCheck}
        handleClickk = {handleClickk}
        />) : (
            <p><strong>Great, you done excellently</strong></p>
        )}
    
    </main>
  )
}

export default Content