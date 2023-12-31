import React, { useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid'
export default function InputData({ addTask, taskData, setTaskData,settingInputField }) {
    let [taskInput, setTaskInput] = useState()
    let inputRef = useRef()
    function handleSubmit() {
        settingInputField(inputRef)
        const taskInputValue = inputRef.current.value;
        if (taskInputValue.length > 0) {
            console.log('data from input field', taskInputValue);
            addTask(taskInputValue);

            // Update the state correctly
            // setTaskData((prevData) => [...prevData, { text: taskInputValue, id: nanoid() }]);

            // Clear the input field
            inputRef.current.value = '';
        }
    }
    
    return (
        <div className="app-inputData">
            <div className="input-field">
                <input type="text" placeholder="enter task" className="taskInput" ref={inputRef} />
                <Button variant="contained" className="submitBtn" style={{backgroundColor:'#f8b072'}} onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}
