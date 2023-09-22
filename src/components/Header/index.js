import React from 'react';
import { MdPersonOutline, MdOutlineArrowOutward } from 'react-icons/md';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Lista de tarefas semanais</h1>
        <div className="botoes">
          <button type="button" className="btn azul">
            <MdPersonOutline />
          </button>
          <button type="button" className="btn roxo">
            <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
