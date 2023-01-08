import { useContext } from "react"
import React from "react"
import { cartContext } from "../../storage/cartContext"
 
function CartWidget() {
    const valueContext = useContext(cartContext);
    const totalItems = valueContext.totalItemsInCartfn() > 0;
    

    return (
        <div>
           <span>🛒</span>
           
           {totalItems > 0 && <spam>{totalItems}</spam>}
           
        </div>
    );
  }

  export default CartWidget