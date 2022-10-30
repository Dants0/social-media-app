import { Link } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import "./register.scss";

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  })

  const [err,setErr] = useState(null)

  const handleChange = (e) =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleClick = async (e) =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8000/api/auth/register", inputs)
    }catch(err){
      setErr(err.response.data)
    }
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Must Social.</h1>
          <p>
            A nova rede social
          </p>
          <span>Possui conta?</span>
          <Link to="/login">
            <button>Entrar</button>
          </Link>
        </div>
        <div className="right">
          <h1>Registrar</h1>
          <form>
            <input type="text" placeholder="Usuário" name="username" onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="Senha" name="password" onChange={handleChange}/>
            <input type="text" placeholder="Nome" name="name" onChange={handleChange}/>
            {err && "Usuário já existe"}
            <button onClick={handleClick}>Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
