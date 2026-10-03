import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input,setInput] = useState("");
  const [task, setTask] = useState("");
  const [list,setList] = useState([]);

  const handleChange = (e) => {
      e.preventDefault;
      setInput(e.target.value);
      setTask(e.target.value);
     
  }

  const handleAddTask = () => {
      let newList = [...list];
      newList.push(task);
      setList(newList);

      setTask("");
      setInput("");
  }

  const handleUpdate = (key) => {
      let data = list[key];
      let newList = [...list];
      newList.splice(key,1);
      setList(newList);
      setInput(data);
  }

  const handleDelete = (key) =>{
     let newList = [...list];
     newList.splice(key,1);
     setList(newList);
  }
  
  
  return (
    <div className="container">
        <h1 className="heading">Todo List</h1>
        <div className="AddTask">
           <input 
            className="input" 
            type="text" 
            placeholder='Enter Task'
            value={input}
            onChange={(e) => handleChange(e)} 
           />
           <button class="addbtn"
           onClick={handleAddTask}>Add</button>
        </div>
        <div className="listItems">
            
              {list.map((li,key) => <div className="list" key={key}>
                   <h2>{li}</h2>
                   <div className="btns">
                   <button onClick={() => handleUpdate(key)}>Update</button>
                   <button onClick={() => handleDelete(key)}>Delete</button>
              </div>
                </div>)}
            
            
        </div>
        
    </div>
  )
}

export default App
