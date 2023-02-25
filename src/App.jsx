import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {resolveBaseUrl} from "vite";


const App = ()=> {
    const [todo,setTodo]=useState("");
    const [todos,setTodos]=useState([]);
    const addTodo =()=> {
        if (todo !== "") {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };
    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo)=>{
            return todo !==text;
        });
        setTodos(newTodos)
    }


    return (
        <div className="App">
            <h1>React Todo App</h1>
            <div className="input-wrapper">
                <input type="text" name="todo" placeholder="Create a new todo"
                onChange={(e)=>{
                setTodo(e.target.value);}  }
                />
                <button className="add-button" onClick={addTodo}>Add</button>
                <ul className="todo-list">
                    {todos.map((todo,index)=>(
                        <div className="todo">
                            <li key={index}>{todo}</li>
                            <button className="delete-button" onClick={deleteTodo}>Delete</button>
                        </div>
                    ))
                    }
                </ul>

            </div>
        </div>
    );
};

export default App;
