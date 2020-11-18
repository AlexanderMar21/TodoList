import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, staus , setTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo =>(
                    <Todo todos={todos}
                    todo={todo}
                     setTodos={setTodos}  key={todo.id} todotext={todo.text} complete={todo.complete}/>
                ))}
            </ul>
      </div> 
    )
}

export  default TodoList;