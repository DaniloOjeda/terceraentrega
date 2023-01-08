import React , { useState, useEffect  } from "react";
import { getSingleItem } from "../../service/mockService";
import { useParams } from "react-router-dom";
import "./itemdetail.css"

import ItemDetail from "./ItemDetail";
import Loader from "../loader/Loader";
 

function ItemDetailContainer() {
 const [producto, setProducto] = useState([]);
 const [ isLoading, setIsLoading] = useState(true);

let { itemID } = useParams();

async function getData() {
   let respuesta = await getSingleItem(itemID);
   setProducto(respuesta);
   setIsLoading(false)
}

useEffect( () =>{
getData();
}, []);

   return (
   <>  
   <h2>Detalle del producto</h2>
   { isLoading ? <Loader color="red" /> : <ItemDetail producto={producto} />} 
   </>
   );
 }

export default ItemDetailContainer;