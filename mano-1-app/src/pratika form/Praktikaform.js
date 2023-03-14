import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task/Taskform";
export default function Praktikaform(){


const [taskInput,setTaskInput] = useState(''); 
const [tasks,setTasks] = useState([
    {id: 1, task:"Ею можешь Пришед тверда увидит высоки на Вы отрады бы.", status: false},
    {id: 2, task:"Any delicate you how kindness horrible outlived servants.", status: false},
    {id: 3, task:"Entra tutti scena ed isola ti amare udivo.", status: false},
    {id: 4, task:"Game of as rest time eyes with of this it.", status: false},
    {id: 5, task:"Or neglected agreeable of discovery concluded oh it sportsman.", status: false}
])


const changeStatus = (id) => {
    let data_copy = [...tasks];
    data_copy.forEach((task) => {
        if(task.id === id) {
            task.status = true;
            return;
        }
    });
    setTasks(data_copy);
};


const deleteTask = (id) =>{
    setTasks(tasks.filter((item) => item.id !== id));
};


function handleSubmit(e){
    e.preventDefault();
    if(taskInput){
        const task= {id: uuidv4(), task: taskInput, status: false};
        setTasks((oldTasks) => [...oldTasks, task]);
        setTaskInput('');
    } else{
        console.log('empty values');
    }
};


let tasks_list = tasks.map((el) =>{
    return(
        <Task
        key={uuidv4()}
        id={el.id}
        text={el.task}
        status={el.status}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
        />
    );
});


return(
    <div className="text-bg-dark">
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            id='taskInput'
            name='taskInput'
            value={taskInput}
            placeholder = "Dadek taska..."
            onChange={(e) => setTaskInput(e.target.value)}
            />
        </form>
        <ul>{tasks_list}</ul>
    </div>
)
}
