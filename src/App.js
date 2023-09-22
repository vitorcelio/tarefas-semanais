import { React, useState } from 'react';
import Header from './components/Header';
import Dia from './components/Dia';

const App = () => {
  const diasSemana = [
    { id: 1, nome: 'Segunda', tarefas: [] },
    { id: 2, nome: 'Terça', tarefas: [] },
    { id: 3, nome: 'Quarta', tarefas: [] },
    { id: 4, nome: 'Quinta', tarefas: [] },
    { id: 5, nome: 'Sexta', tarefas: [] },
    { id: 6, nome: 'Sábado', tarefas: [] },
  ];

  const [dias] = useState(diasSemana);

  return (
    <section className="principal">
      <Header />
      <section className="dias-semana">
        {dias.map((dia) => (
          <Dia key={dia.id} nome={dia.nome} lista={dia.tarefas} />
        ))}
      </section>
    </section>
  );
};

export default App;
