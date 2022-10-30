import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })

  const [err,setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      await login(inputs)
      navigate("/")
    }catch(err){
      setErr(err.response.data)
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Must Social.</h1>
          <p>
            A nova rede social
          </p>
          <span>Não possui conta?</span>
          <Link to="/register">
            <button>Registrar</button>
          </Link>
        </div>
        <div className="right">
          <h1>Entrar</h1>
          <form>
            <input type="text" placeholder="Usuário" name="username" onChange={handleChange}/>
            <input type="password" placeholder="Senha" name="password" onChange={handleChange}/>
            {err&&"Usuário não existe"}
            <div className="sectright">
              <button onClick={handleLogin} className="btnLogin">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
