export const Header = ({ tomaUnValor }) => {
  const variableHeader = true;

  tomaUnValor(variableHeader);

  return (
    <h1 className="font-black text-5xl text-center mx-auto md:w-2/3">
      Seguimiento Pacientes{' '}
      <span className="text-indigo-600"> Veterinaria</span>{' '}
    </h1>
  );
};
