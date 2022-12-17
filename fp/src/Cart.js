import React from "react";
import Header from "./Header";
import Item from "./Item";
//import Axios from "./api/axios";
function Cart()
{   
    
    const [notes,setNotes]=React.useState();
    React.useEffect(()=>{
        fetch("/cartz").then(res => res.json())
           .then(jsonRes =>{
            setNotes(jsonRes);});
      });
      React.useEffect(()=>{
  
        console.log(notes);
      },[notes]);
      function onclick(id,img,title,price)
      {
      }
    return(
        <div>
            <Header />
            <h1> Your Cart </h1>
            {notes.map((noteItem, index) => {
            return(
                <div>
                    <Item
                    img={noteItem.img}
                    title={noteItem.title}
                    price={noteItem.price}
                    id={noteItem.id}
                    onclick={onclick} 
                    />
                </div>
            );})}
        </div>
    );
}

export default Cart;