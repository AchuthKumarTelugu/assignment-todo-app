import { useEffect, useState,useRef } from 'react'
import InputData from './components/InputData'
import './App.css'
import { nanoid } from 'nanoid'
import TaskCard from './components/TaskCard'

function App() {
  let [taskData,setTaskData]=useState([])
  let [inputField,setInputField]=useState()
  function settingInputField (input) {
    setInputField(input)
  }
  useEffect(()=>{
    let storedData=JSON.parse(localStorage.getItem('users')) || []
    setTaskData(storedData)
  },[])
  function addTask (task) {
        let tempObj={
          text:task,
          id:nanoid()
        }
       
      setTaskData((prevData)=>[...prevData,tempObj])
        addToLocalStorage(tempObj)
  }
  function addToLocalStorage (tempObj) {
    if(localStorage.getItem('users')) {
      let tempArray=JSON.parse(localStorage.getItem('users'))
      tempArray.push(tempObj)
      console.log(tempArray)
      localStorage.setItem('users',JSON.stringify(tempArray))
    }
    else{
      localStorage.setItem('users',JSON.stringify([tempObj]))
    }
    
  }
  function deleteData (valueObj) {
    console.log('delete function activated')
    console.log(valueObj.id)
    let localArr=JSON.parse(localStorage.getItem('users'))
    let updatedLocalArr=localArr.filter((value) => {
      if(value.id!=valueObj.id) {
        return value
      }
    })
    console.log(updatedLocalArr)
    localStorage.setItem('users',JSON.stringify(updatedLocalArr))
    let updatedTasks=taskData.filter((value) => {
      if(value.id!=valueObj.id) {
        return value
      }
    })
    setTaskData(updatedTasks)   
  }
  function updateData (valueObj) {
   console.log('entered updateData')
   inputField.current.value=valueObj.text
   deleteData(valueObj)
  }
  return (
    <div className='app'>
      <div className="todo-app">
        <div className="heading">
          <h2>Todo-List</h2>
        </div>
        <div className="todo-content">
        <InputData addTask={addTask} taskData={taskData} setTaskData={setTaskData} settingInputField={settingInputField}/>
        <TaskCard taskData={taskData} deleteData={deleteData} updateData={updateData}/>
        </div>
       
      </div>
    </div>
  )
}

export default App
