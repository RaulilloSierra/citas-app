const Paciente = () => {
  return (
    <div>
      <div className="m-6 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: <span className="font-normal normal-case">Raul</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:{" "}
          <span className="font-normal normal-case">raul@correo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha de alta:{" "}
          <span className="font-normal normal-case">27/06/2023</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas:{" "}
          <span className="font-normal normal-case">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            beatae minima, amet doloremque quos impedit, quasi expedita fugit
            atque veniam rerum reiciendis delectus iusto minus sint a temporibus
            odio consequatur?
          </span>
        </p>
      </div>
    </div>
  );
};

export default Paciente;
