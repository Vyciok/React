import React, {useState, useEffect}  from "react"; 
const url='https://jsonplaceholder.typicode.com/todos';
const Jsonn = () => {
    const [todos,setTodos] = useState([]);
    const getTodos = async () => {
        const response = await fetch(url);
        const todos = await response.json();
        setTodos(todos);
        console.log(todos);
    };
    useEffect(() => {
        getTodos();
    }, []);
    return ;
};
export default Jsonn;