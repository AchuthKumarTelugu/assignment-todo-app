import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPenToSquare,faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function TaskCard({ taskData,deleteData,updateData }) {
   
    useEffect(()=>{
        console.log('taskData',taskData)
    },[taskData])
    return <div className='app-taskCard'>
        <div className="taskList">

            {
                taskData.map((value, index) => {
                    return (
                        <div className="task" key={index}>
                            <h5>{value.text}</h5>
                            <div className="task-actions">
                                <button onClick={()=>{updateData(value)}} className="editTask"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                <button onClick={()=>{deleteData(value)}} className="deleteTask"><FontAwesomeIcon icon={faTrashCan} /></button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    </div>
}