import React from "react";


const Todo = ({todotext , todos ,todo ,  setTodos}) =>{
    // delete the todo that the delete button it was clicked
    const deleteHandler = () =>{
        setTodos(todos.filter(el => el.id !== todo.id ))
    }
    // toggle the completed field 
    const completeHandler = ()=>{
        setTodos(todos.map(item => {
            if(item.id === todo.id ){
                return {
                    ...item,completed:!item.completed
                }
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed?"completed":""}`}>{todotext}</li>
            <button onClick={completeHandler} className = "complete-btn">
                <i className="fas fa-check"></i>
                </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;