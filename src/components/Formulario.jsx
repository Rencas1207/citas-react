import { useState, useEffect } from 'react';
import Error from './Error';

export const Formulario = ({ pacientes, setPacientes, pacienteGlobal, setPacienteGlobal }) => {

  // Generar id
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const [paciente, setPaciente] = useState({
    mascota: '',
    propietario: '',
    email: '',
    fechaAlta: '',
    sintomas: ''
  });

  const [error, setError] = useState(false);

  // renderiza cada vez cuando cambia la dependencia
  useEffect(() => {
    // console.log(Object.keys(pacienteGlobal));
    if (Object.keys(pacienteGlobal).length > 0) {
      // console.log('si hay');
      setPaciente(pacienteGlobal);
    } else {
      setPaciente({
        mascota: '',
        propietario: '',
        email: '',
        fechaAlta: '',
        sintomas: '',
      });
    }
  }, [pacienteGlobal])

  const { mascota, propietario, email, fechaAlta, sintomas } = paciente;

  const handleChange = (e) => {
    setPaciente({
      ...paciente,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if (Object.values(paciente).includes('')) {
      setError(true);
      return;
    }

    setError(false);
    // el estado de "pacientes" ya viene por defecto y no tenemos que pasarlo como prop

    if (paciente.id) {
      // editando registro
      setPacientes({
        ...paciente,
        id: paciente.id
      });
      const pacienteUpdated = pacientes.map(pacienteState => pacienteState.id === paciente.id ? paciente : pacienteState);
      setPacientes(pacienteUpdated);
      setPacienteGlobal({});
    } else {
      // nuevo registro
      paciente.id = generarId();
      setPacientes([...pacientes, paciente]);
    }

    // reset el formulario
    setPaciente({
      mascota: '',
      propietario: '',
      email: '',
      fechaAlta: '',
      sintomas: '',
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white overflow-y-scroll h-screen shadow-md rounded-xl py-10 px-5 mb-20 sticky top-5 mx-5"
        action=""
      >
        {error && (
          <Error>
            <p>Todos los mensaje son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            name="mascota"
            placeholder="Nombre de la mascota"
            className="border-2 outline-none w-full p-2 mt-2 placeholder-gray-400-600 rounded-md"
            value={mascota}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            name="propietario"
            placeholder="Nombre del propietario"
            className="border-2 outline-none w-full p-2 mt-2 placeholder-gray-400-600 rounded-md"
            value={propietario}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="border-2 outline-none w-full p-2 mt-2 placeholder-gray-400-600 rounded-md"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Fecha Alta
          </label>
          <input
            id="alta"
            type="date"
            name="fechaAlta"
            className="border-2 outline-none w-full p-2 mt-2 placeholder-gray-400-600 rounded-md"
            value={fechaAlta}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los síntomas"
            name="sintomas"
            className="border-2 outline-none w-full p-2 mt-2 placeholder-gray-400-600 rounded-md"
            value={sintomas}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
      </form>
    </div>
  );
};
