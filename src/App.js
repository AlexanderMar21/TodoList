import React ,{useState , useEffect} from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Header from "./components/Header"

let user = "God";  // replace your name here

// Main function that will be rendered at index.js
function App() {
  // our useStates 
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status , setStatus] = useState("all");
  const [filteredTodos , setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos , status] );

 
  // filter todos accordind to their status
  const filterHandler = () => {
    switch (status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
          default:
            setFilteredTodos(todos);
            break;
    }
  }
  // save to local strorage

  const saveLocalTodos = () => {
       localStorage.setItem('todos' , JSON.stringify(todos));
  }
 

  // retrieve entries form local storage
  const getLocalTodos = () => { 
    // if storage is empty then store our new data
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos'  , JSON.stringify([]));
    } else {
      // set our state data from local storage
       let localData = JSON.parse(localStorage.getItem("todos"));
       setTodos(localData);
    }
  }
  // return our components
  return (
    <div className="App">
      <Header user={user} />
      <Form todos={todos}
       setTodos={setTodos}
       inputText = {inputText}
       setStatus = {setStatus}
        setInputText = {setInputText}/>
      <TodoList status={status} todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
