import './text-box-style.css'


export default function TextBox({onValueChange}){
    
    return <input onChange={onValueChange} className='text-box' type={'text'} placeholder='Task'/>
}