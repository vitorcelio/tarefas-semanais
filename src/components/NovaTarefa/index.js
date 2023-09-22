import React, { useState } from 'react';

import PropTypes from 'prop-types';
import './styles.css';

function NovaTarefa({ onNovaTarefa }) {
  const ESC_KEY = 27;
  const ENTER_KEY = 13;
  const [value, setValue] = useState('');

  const apagar = () => {
    setValue('');
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const submit = () => {
    if (value.trim() !== '' && onNovaTarefa) {
      onNovaTarefa(value);
      apagar();
    }
  };

  const onKeyDown = (e) => {
    if (e.which === ENTER_KEY) {
      submit();
    } else if (e.which === ESC_KEY) {
      apagar();
    }
  };

  return (
    <input
      value={value}
      className="input-tarefa"
      placeholder="Digite a tarefa"
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

NovaTarefa.propTypes = {
  onNovaTarefa: PropTypes.func.isRequired,
};

export default NovaTarefa;
