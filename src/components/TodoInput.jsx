
export default function TodoInput(props) {
    const {handleAddTodos,todoValue,setTodoValue} = props ;
    

    const handleChange = (e)=>{
        setTodoValue(e.target.value)
    }


  return (
    <header>
        <input value={todoValue} onChange={
            handleChange} type="text" placeholder="Enter a todo ..." />
        <button onClick={()=>{
            handleAddTodos(todoValue)
            setTodoValue('')
        }}>Add</button>
    </header>
  )
}
