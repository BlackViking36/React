import React, { useState, useEffect } from 'react';
import CartWidget from '../NavBar/CartWidget/CartWidget';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log('cambio el count')
    }, [count])


    const decrement = () => {
        if(count > initial){

            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < stock){
        setCount(count + 1)
        }
    }

    const styleCounter = {
        backgroundColor: 'darkgray',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    }

    const styleCards = {
        justifyContent: 'center',
        margin: '5px',
        color: 'black',
        width: '5vh',
        backgroundColor: '#FFF'
    }

    return(
        <div className='iCounter' style={styleCounter}>
            <Button variant="secondary" size="sm" onClick={decrement}>-</Button> 
            <p className='itemCount' style={styleCards}>{count}</p>
            <Button variant="secondary" size="sm" onClick={increment}>+</Button>
            <Button variant="secondary" size="sm" onClick={() => onAdd(count)}><CartWidget /></Button>
        </div>
    )
} 

export default ItemCount;