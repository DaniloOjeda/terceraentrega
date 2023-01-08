import React from "react";
import { cartContext } from "../../storage/cartContext";

function CartContainer(){
    const { cart, removeItem } = useContext(cartContext);
    return <div>
        <h1>Tu carrito</h1>
        {
            cart.map(  item =>
                <div>
                    <h3>{item.title}</h3>
                    <h4>{item.price}</h4>
                    <p>cantidad: {item.count}</p>
                    <button onClick>X</button>

                    </div>
                )
        }
    </div>;
}

export default CartContainer;