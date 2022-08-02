import { useState } from "react";
import Button from "./components/button/component";
import TaskList from "./components/task-list/component";
import Task from "./components/task/component";
import TextBox from "./components/text-box/component";

const lst = [
  {title:"Manger"},
  {title: "Dormir"},
  {title: "Shopping"}
]

function App() {
  const [list,setList] = useState(lst);
  const [newTask, setNewTask] = useState("")
  const onTextChange=(evt)=>{
    setNewTask(evt.target.value)
    console.log(newTask)
  }
  const onButtonClicked=(evt)=>{
    setList(lastList=>[...lastList,{title:newTask}]);
  }
  return (
    <>
      <div style={{display:'flex', margin:'auto',marginTop:'30px', width:'50%',flexDirection:'row', justifyContent:'space-between' }}>
        <TextBox onValueChange={onTextChange}/>
        <Button onClick={onButtonClicked}/>
      </div>
      <div>
        <TaskList list={list}/>
      </div>
    </>
    
  )
}

export default App;