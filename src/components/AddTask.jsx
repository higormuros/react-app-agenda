import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({handleTaskAddition}) =>{
    const [inputDados,setInputDados] = useState("");
    const handleInputChange = (e) =>{
        setInputDados(e.target.value);
    };
    const handleAddTaskClick = () =>{
        handleTaskAddition(inputDados);
        setInputDados("");
    }

    return (
     <div className="add-task-container">
        <input 
            onChange={handleInputChange} 
            value={inputDados}
            className="add-task-input" 
            type="text" 
        />
        <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
     </div>   
    )
}

export default AddTask;
