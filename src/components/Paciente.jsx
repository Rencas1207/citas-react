import React from 'react';

export const Paciente = () => {
  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">Coquito</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">Rencas</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {''}
        <span className="font-normal normal-case">
          30 de diciembre del 2023
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {''}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          distinctio neque quae aliquid quia temporibus magnam, ea odio,
          quibusdam qui maiores impedit cum beatae enim nemo voluptate,
          reprehenderit ipsum. Aliquam nihil explicabo dolor ducimus magnam!
          Optio magnam repudiandae mollitia fuga odit aspernatur cum sunt
          architecto porro molestiae, exercitationem provident dolores.
        </span>
      </p>
    </div>
  );
};
