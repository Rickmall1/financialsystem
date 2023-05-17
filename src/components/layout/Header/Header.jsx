import { useState } from "react";
import MainBtn from "../../Global/MainBtn/MainBtn";

function Header() {

  const [active, setMode] = useState(false)

  const ToogleMode = () => {
    setMode(!active)
  }

  return (
    <header>
      <div className="logo">
        <img src="assets/img/BudgetBuddy.svg" alt="" />
      </div>
      <nav>
        <ul className={active ? "nav_active" : ".nav_list"}>
          <li>
            <a href="#">Sou Pessoa Fisíca</a>
          </li>
          <li>
            <a href="#">Sou Pessoa Jurídica</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <div className="accountBtns">
              <a href="#" className="loginBtn">Login</a>
              <MainBtn text="Cadastre-se" />
            </div>
          </li>
        </ul>
      </nav>
      <div onClick={ToogleMode} className="Mobile">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
    </header>
  );
}

export default Header;
