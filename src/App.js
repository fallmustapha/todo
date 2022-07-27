import Button from "./components/button/component";
import TaskList from "./components/task-list/component";
import Task from "./components/task/component";
import TextBox from "./components/text-box/component";

function App() {
  return (
    <>
    <div style={{margin:'auto',display:"flex",flexDirection:"row",width:"50%",justifyContent:"space-between",marginTop:"20px" }}>
      <TextBox/>
      <Button/>
    </div>
    <TaskList></TaskList>
    </>
    
  )
}

export default App;