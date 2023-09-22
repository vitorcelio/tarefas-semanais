import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TarefaDetalhe from '../TarefaDetalhe';
import NovaTarefa from '../NovaTarefa';

import { MdClose } from 'react-icons/md';
import './styles.css';

const Dia = ({ nome, lista }) => {
  const [tarefas, setTarefa] = useState(lista);
  const [modal, setModal] = useState(null);

  const novaTarefa = (value) => {
    setTarefa([
      ...tarefas,
      {
        id: new Date().getTime(),
        descricao: value,
      },
    ]);
  };

  const deletar = (tarefa) => {
    setTarefa(tarefas.filter((obj) => obj.id !== tarefa.id));
  };

  const abrirMais = (value) => {
    const modalHtml = <TarefaDetalhe descricao={value} onHidden={onHidden} />;
    setModal(modalHtml);
  };

  const onHidden = () => {
    setModal(null);
  };

  return (
    <>
      <section className="dia">
        <h2>{nome}</h2>
        <NovaTarefa onNovaTarefa={novaTarefa} />
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <span onClick={() => abrirMais(tarefa.descricao)}>
                {tarefa.descricao}
              </span>
              <button type="button" onClick={() => deletar(tarefa)}>
                <MdClose />
              </button>
            </li>
          ))}
        </ul>
      </section>
      {modal}
    </>
  );
};

Dia.propTypes = {
  nome: PropTypes.string.isRequired,
  lista: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      descricao: PropTypes.string.isRequired,
    })
  ),
};

export default Dia;
