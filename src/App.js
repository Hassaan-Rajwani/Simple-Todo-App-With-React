import './App.css';
import {useState} from 'react'

function App() {
  const[input,setInput] = useState('')
  const[todo,setTodo] = useState([])
  const[BtnChange,setBtnChange] = useState(true)
  const[editIndex,setEditIndex] = useState()

// add function
  const addTask = () => {
  if(input == ""){
    alert("Please Write !")
  }
  else{
    let tem = [...todo]
    tem.push(input)
    setTodo(tem)
    console.log(todo)
    setInput("")
  }
  setBtnChange(true)
}
  
const del = (listIndex) => {
  const tem2 = [...todo]
    tem2.splice(listIndex , 1)
    setTodo(tem2)
}

const edit = (listIndex) => {
  setInput(todo[listIndex])
  setBtnChange(false)
  setEditIndex(listIndex)
}

const update = () => {
  const tem3 = [...todo]
  tem3[editIndex] = input
  setTodo(tem3)
  setInput("")
}

  return (
    <div className="App">
      <h1>React Todo-App</h1>
      <br />
      <input className='input' type="text" onChange={(e)=>{setInput(e.target.value)}} value={input} placeholder="Add Any Item" />
      {BtnChange ?
      <button className='btn1' onClick={addTask}>Add</button>
      :
      <button className='btn2' onClick={update}>Update</button>
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

