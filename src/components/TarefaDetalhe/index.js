import React from 'react';
import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';
import './styles.css';

function TarefaDetalhe({ descricao, onHidden }) {
  return (
    <div id="modal" className="modal">
      <div className="tarefa-detalhe">
        <header>
          <h1>Detalhe da tarefa</h1>
          <button type="button" onClick={onHidden}>
            <MdClose />
          </button>
        </header>
        <div>
          <p>{descricao}</p>
        </div>
      </div>
    </div>
  );
}

TarefaDetalhe.propType = {
  descricao: PropTypes.string.isRequired,
  onHidden: PropTypes.func.isRequired,
};

export default TarefaDetalhe;
