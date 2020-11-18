import React from "react";

const Form = ({ setInputText ,setStatus ,inputText, todos , setTodos }) => {
    
    // since we dont submit the form we update the value if the input with the next fumction
    const inputTextHandler = (e) => {
        setInputText(e.target.value);  
    }
     // when plus button will be pressed 
    const submitTodoHandler = (e) => {
        e.preventDefault(); // preventing our form from submiting
        setTodos([
            ...todos,{text: inputText ,  // set whatever text was in the input form when button was clicked
                 completed:false ,  // by default new todos are not completed
                 id:Math.floor(Math.random()*1000) // its not the best solution 
            }]);
            // after submition we empty the imput
        setInputText('');

    }
    // the chosen status from the select dropdown
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return(
        <form>
            <input value ={inputText} onChange={inputTextHandler}  type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
    </form>
    )
}

export default Form;