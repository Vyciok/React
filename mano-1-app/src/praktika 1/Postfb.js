import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PostList from "./Postlistt";


const url='https://api.github.com/users';

export default function Postfb(){

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
        <PostList
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