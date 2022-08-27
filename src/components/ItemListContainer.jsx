import React from 'react'
import ItemCount from './ItemCount';
const ItemListContainer = ({nameEcommerce}) => {



  return (
    <div>
        <h1>{nameEcommerce}</h1>
       <ItemCount/>
    </div>
  )
}

export default ItemListContainer