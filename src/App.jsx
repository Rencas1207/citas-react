import { useState } from 'react';

import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListadoPacientes } from './components/ListadoPacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteGlobal, setPacienteGlobal] = useState({});

  const deletePaciente = (id) => {
    const pacientesUpdated = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesUpdated);
    setPacienteGlobal({});
  }


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} setPacienteGlobal={setPacienteGlobal} pacienteGlobal={pacienteGlobal} />
        <ListadoPacientes pacientes={pacientes} setPacienteGlobal={setPacienteGlobal} deletePaciente={deletePaciente} />
      </div>
    </div>
  );
}

export default App;
