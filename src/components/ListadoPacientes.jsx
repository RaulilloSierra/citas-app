import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-7/12 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administra tus{" "}
        <span className="text-sky-600 font-bold ">pacientes y citas</span>
      </p>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
};

export default ListadoPacientes;
