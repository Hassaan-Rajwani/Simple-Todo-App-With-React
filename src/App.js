import './App.css';
import {useState} from 'react'
function App() {
  const[todoItem,setTodoItem] = useState('')
  const[todo,setTodo] = useState([])
  const[BtnChange,setBtnChange] = useState(true)

const addTask = () => {
  if(todoItem == ""){
    alert("Please Write !")
  }
  else{
    let tem = [...todo]
    tem.push(todoItem)
    setTodo(tem)
    console.log(todo)
    setTodoItem("")
  }
  setBtnChange(true)
}
  
const del = (listIndex) => {
  console.log(listIndex)
  const filter = todo.filter((element , index) => {
    return listIndex !== index
  })
  setTodo(filter)
}

const edit = (listIndex) => {
  console.log(listIndex)
  const filter2 = todo.filter((element , index) => {
    return listIndex == index
  })
  setTodoItem(filter2)
  const filter3 = todo.filter((element , index) => {
    return listIndex !== index
  })
  setTodo(filter3)
  setBtnChange(false)
}
  return (
    <div className="App">
      <h1>React Todo-App</h1>
      <br />
      <input className='input' type="text" onChange={(e)=>{setTodoItem(e.target.value)}} value={todoItem} placeholder="Add Any Item" />
      {BtnChange ?
      <button className='btn1' onClick={addTask}>Add</button>
      :
      <button className='btn2' onClick={addTask}>Update</button>
      }
      <br />
      <br />
      <table>
      {todo.map((item , listIndex) => {
        return(
        <tr>
          <td className='name'>{item}</td>
          <td><button className='btn3' onClick={()=>{del(listIndex)}}>Delete</button></td>
          <td><button className='btn4' onClick={() => {edit(listIndex)}}>Edit</button></td>
        </tr>
        )
      })}
      </table>
    </div>
  );
}

export default App;

