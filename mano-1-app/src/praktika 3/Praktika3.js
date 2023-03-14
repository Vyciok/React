import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task/Task";
export default function Praktika3(){

const [tasks,setTasks] = useState([
    {
        id: 1,
        task: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  ",
        status: false,
    },
    {
        id: 2,
        task: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        status: false,
    },
    {
        id: 3,
        task: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
        status: false,
    },
    {
        id: 4,
        task: "Apartments simplicity or understood do it we. Song such eyes had and off. Removed winding ask explain delight out few behaved lasting.",
        status: false,
    },
    {
        id: 5,
        task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        status: false,
    }
]);


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
    <div className="d-flex flex-column">
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Task</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>{tasks_list}</tbody>
        </table>
    </div>
)
}
