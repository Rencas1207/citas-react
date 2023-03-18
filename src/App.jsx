import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListadoPacientes } from './components/ListadoPacientes';

function App() {
  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(() => INITIAL);
  const [pacienteGlobal, setPacienteGlobal] = useState({});

  // opcion 1
  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; // si no hay nada en LS entonces agregale un arr empty
  //     setPacientes(pacientesLS);
  //   }
  //   obtenerLS();
  // }, []); // si no le pasamos dependencia se va ejecutar una sola vez

  // opacion 2 - obtenemos y parseamos el locastarage al state default


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

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
