import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="f-top">
          <div className="first-column">
            <p className="budgetbuddy-title">
              Budget<strong>Buddy</strong>
            </p>
            <p className="budgetbuddy-slogan">
              Assuma o controle das suas finanças!
            </p>
          </div>
          <div className="second-column">
            <p className="contact-us">Contate-nos!</p>
            <p className="email-address">loremipsum@gmail.com</p>
            <p className="phone-number">(11)1234-5678</p>
          </div>
          <div className="third-column">
            <p>
              <a href="#">Products</a>
            </p>
            <p>
              <a href="#">Team</a>
            </p>
            <p>
              <a href="#">Blog</a>
            </p>
            <p>
              <a href="#">Shop</a>
            </p>
          </div>
        </div>
        <div className="f-mid">
          <hr />
        </div>
        <div className="f-bottom">
          <p>© 2023 - BudgetBuddy - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
