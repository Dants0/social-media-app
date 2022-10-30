import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
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
            <input type="text" placeholder="Usuário" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="text" placeholder="Nome" />
            <button>Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
