import React , {useState, useEffect} from "react";
//importar la promesa
import getItems, { getItemsCategory } from "../../service/mockService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categoryID = useParams().categoryID;

   useEffect (() => {
    
    if (categoryID === undefined) {
    getItems().then((respuesta) => {
        setProduct(respuesta);
        setIsLoading(false);
     }); 
    }else{
      getItemsCategory(categoryID).then((respuestaFiltrada) => {
         setProduct(respuestaFiltrada);
         setIsLoading(false)
      }
      );
   }
  }, [   categoryID]);
  if (isLoading) {
     return <h3>Cargando . . .</h3>
  }

  return <ItemList product={product} />;
}

export default ItemListContainer;