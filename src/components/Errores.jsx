const Errores = (props) => {
  const { mensaje } = props;
  return (
    <div className="bg-red-700 text-white text-center p-3 uppercase font-bold m-3 rounded-md">
      <p>{mensaje}</p>
    </div>
  );
};

export default Errores;
