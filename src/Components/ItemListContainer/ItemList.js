import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import getProductos from '../../utils/getProducts';
import Productos from '../../mock/data';

const ItemList = () =>{
    const [count, setCount] = useState(1);
    const [productos, setProductos] = useState([])
    
    useEffect (() => {
        getProductos().then(Productos => setProductos(Productos)).catch(Error => console.log(Error))
    }, [])

    useEffect (()=>{

    }, [productos])


    const stock = 6;
    const initial = 1; 
    const onAdd = (condition) => {
        if (condition === '-') {
            setCount(count - 1);
        }
        if (condition === '+') {
            setCount(count + 1);
        }
    }

    return(
        <div className='cardGeneral'>
        {Productos.map((Productos) =>(
            <div className='cardGeneral card col-sm-12 col-lg-3'>
                <img src={Productos.imagen} id="img" className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Productos.nombre}</h5>
                    <h3 className="card-text text-slide"> ${Productos.precio}</h3>
                </div>
                
                <div>
                    <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count}/>
                </div>
            </div>    
        ))}

        </div>

    )
}
export default ItemList;