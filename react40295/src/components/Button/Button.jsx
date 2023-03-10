import styles from "./button.module.css";
import { useState  } from "react";

function Button(props) {
    const [colorButton, setColorButton] = useState(props.color);
   
   const styleBtn = { backgroundColor: colorButton};
   
   function changeColor () {
    setColorButton ("blue")
   } 

    return (
    <button  onClick={ props.onClick } style={styleBtn} className={styles.btn}>
    {props.children  ||  props.text}
    </button>
    );
}



export default Button;

