import Task from '../task/component'
import './task-list.css'


export default function TaskList({list}){
    return (
        <div className='task_list-container'>
            {
                list.map(task=><Task title={task.title}></Task>)
            }
        </div>
    )
}