const Paciente = (props) => {
  const { paciente, setPaciente, eliminarPaciente } = props;
  const { nombre, propietario, email, alta, sintomas, id } = paciente;

  const handleDelete = () => {
    const respuesta = confirm("¿Desea eliminar el paciente?");
    if (respuesta) eliminarPaciente(id);
  };

  return (
    <div>
      <div className="mx-5 my-6 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario:{" "}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha de alta: <span className="font-normal normal-case">{alta}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button
            className="py-2 px-10 bg-sky-600 hover:bg-sky-700 text-white font-bold uppercase rounded-lg"
            type="button"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button
            className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
            type="button"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paciente;
