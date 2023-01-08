import React , { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";
import { cartContext } from "../../storage/cartContext";


function ItemDetail({producto}){

    const [countInCart, setCountInCart] = useState(0);
    

    const { addToCart } = useContext(cartContext);


 function handleAddToCart(count) {
        setCountInCart(count);
        addToCart(producto, count)
    }

    return (
        <div className="card-detail_main">
        <div className="card-detail_img">
        <img src={producto.imgurl} alt={producto.title} />
        </div>
        <div className="card-detail_detail">
        <h1>{producto.title}</h1>
        <h4 className="priceTag">${producto.price}</h4>
        <p>{producto.description}</p>
        </div>
           <ItemCount onAddToCart={handleAddToCart}/>
           <button>onClick={()=>removeItem(producto.id)}</button> 
           {/* <Link to="/cart">Ir al carrito</Link> */}
       </div>
    )
}

export default ItemDetail