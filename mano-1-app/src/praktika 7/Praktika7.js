import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task7";

const url='https://api.github.com/users';

export default function Praktika7(){

const [tasks,setTasks] = useState([]);

const getTodos = async () => {
    const response = await fetch(url);
    const tasks = await response.json();
    setTasks(tasks);
    console.log(tasks);
};
useEffect(() => {
    getTodos();
}, []);








let tasks_list = tasks.map((el) =>{
    return(
        <Task
        key={uuidv4()}
        id={el.id}
        text={el.login}
        img={el.avatar_url}
        />
    );
});


return(
    <div className="row">
            {tasks_list}
    </div>
)
}
