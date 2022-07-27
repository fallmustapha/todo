import './task-style.css'

export default function Task(){
    return (
        <div className='task_box'>
            <input className='checkbox-round' type={'checkbox'}></input>
            <div className='task_box-info'>
                <span>Lire un livre</span>
                <span>15h00</span>
            </div>
        </div>
    )
}