import { useState } from 'react'
import './task-style.css'

export default function Task({title}){

    const [state,setState]=useState(false);
    const [hour,setHour] = useState(null);
    

    function onchange(evt){
        setState(ste=>!ste);
        const date = new Date();
        setHour(date.getHours().toString()+':'+date.getMinutes().toString())
    }
    return (
        <div className='task_box'>
            <input onClick={onchange} className='checkbox-round' type={'checkbox'}></input>
            <div className='task_box-info'>
                <span style={{textDecoration:state?'line-through':'none'}}>{title}</span>
                {
                    state?<span>{hour}</span>:<span></span>
                }
            </div>
        </div>
    )
}