import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
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
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
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
