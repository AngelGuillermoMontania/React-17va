export default function Buttons({ sumar }) {
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <button>ESTO ESTA EN LA PROP CHILDREN</button>
    </div>
  );
}
