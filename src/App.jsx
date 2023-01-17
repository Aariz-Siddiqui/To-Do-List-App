import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TodoLists from "./TodoLists";
const App =()=>{
    const[inputList,setInputList]=useState("");
    const[Items,setItems]=useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value);
    }
    const listOfItems =(events)=>{
        setItems((oldItems)=>{
            return [...oldItems, inputList]
        })
        setInputList("");
    }
    const deleteItems=(id)=>{
        console.log("deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index!== id;
            })
        })
      }
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>To do list</h1>
                <br/>
                <input 
                type="text" 
                placeholder="add an item" 
                name="input" onChange={itemEvent} 
                value={inputList}/> 
                <button onClick={listOfItems}><AddIcon /></button>
                <br/>
                <ol>
                {Items.map((itemval, index)=>{
                    return <TodoLists 
                    key={index}
                    id={index}
                    text={itemval}
                    onSelect={deleteItems}/> 
                })}
                </ol>
            </div>
        </div>
        </>
    )
}
export default App;