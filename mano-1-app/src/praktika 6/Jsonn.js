import React, {useState, useEffect}  from "react"; 
const url='https://api.github.com/users';
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





<div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>