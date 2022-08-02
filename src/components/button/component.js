import './button-style.css'

const Button = ({onClick})=>{
 return <button onClick={onClick}  className="button">Ajouter</button>
}

export default Button;