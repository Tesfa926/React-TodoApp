import {useState,useEffect} from "react"

import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() { 

  const [todos,setTodos] = useState([]);

  const [todoValue,setTodoValue] = useState('');

  const persistData = (newList)=>{
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  const handleAddTodos = (newTodo)=>{
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  const handleDeleteTodo = (index) =>{
    const newTodoList = todos.filter((todo,todoIndex)=>{
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
    
  }

  const handleEditTodo = (index)=>{
    const valueTobeEdited = todos[index]
    setTodoValue(valueTobeEdited)
    handleDeleteTodo(index)
  }

  useEffect(()=>{
    if(!localStorage){
          return
        }
        let localTodos = localStorage.getItem('todos');
        if(!localTodos){
          return
        }
        localTodos = JSON.parse(localTodos).todos
        setTodos(localTodos)
          },[])

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default App
