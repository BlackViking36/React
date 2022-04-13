import React from 'react';
import './ItemListContainer.css'

const ItemListContanier = (props) =>{
    return(
        <h1 className='Title'>{props.greeting}</h1>
    );
};


export default ItemListContanier;