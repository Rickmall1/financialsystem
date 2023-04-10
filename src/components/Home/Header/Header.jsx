import React from "react";
import MainBtn from "../../Global/MainBtn/MainBtn";

function Header() {
  return (
    <header>
      <div className="container">
        <img src="../../../public/assets/img/BudgetBuddy.svg" alt="" />
        <nav>
          <ul>
            <li>
              {" "}
              <a href="#">Sou Pessoa Fisíca</a>
            </li>
            <li>
              <a href="#">Sou Pessoa Jurídica</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
          <div className="accountBtns">
            <a href="#" className="loginBtn">
              Login
            </a>
            <MainBtn text="Cadastre-se" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
