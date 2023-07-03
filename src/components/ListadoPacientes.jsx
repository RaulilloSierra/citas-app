import Paciente from "./Paciente";

const ListadoPacientes = (props) => {
  const { pacientes, setPaciente, eliminarPaciente } = props;
  return (
    <div className="md:w-1/2 lg:w-1/2 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <div>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus{" "}
            <span className="text-sky-600 font-bold ">pacientes y citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              paciente={paciente}
              key={paciente.id}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes{" "}
            <span className="text-sky-600 font-bold ">
              y aparecerán en este lugar
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ListadoPacientes;
