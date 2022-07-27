import Button from "./components/button/component";
import TaskList from "./components/task-list/component";
import Task from "./components/task/component";
import TextBox from "./components/text-box/component";

function App() {
  return (
    <>
      <div style={{display:'flex', margin:'auto',marginTop:'30px', width:'50%',flexDirection:'row', justifyContent:'space-between' }}>
        <TextBox/>
        <Button/>
      </div>
      <div>
        <TaskList/>
      </div>
    </>
    
  )
}

export default App;