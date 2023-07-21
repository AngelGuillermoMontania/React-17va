import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    submit: "",
    disabled: true,
  });

  function handleChange(e) {
    console.log(e.target.name, e.target.value); // e.target.name accede a la propiedad name de el input

    switch (e.target.name) {
      case "firstName":
        errors.firstName =
          e.target.value.length < 5
            ? "Nombre debe tener almenos 5 caracteres"
            : "";
        break;
      // case "lastName":
      //   errors.lastName =
      //     value.length < 5 ? "Apellido debe tener almenos 5 caracteres" : "";
      //   break;
      // case "email":
      //   var emailPattern = /\S+@\S+\.\S+/;
      //   errors.user = emailPattern.test(value)
      //     ? ""
      //     : "El usuario debe ser un email";
      //   break;
      default:
        setErrors({ ...errors, disabled: false });
        break;
    }

    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function Submit() {
    if (!errors.disabled) {
      // ENVIAR INFORMACION
    } else {
      setErrors({
        ...errors,
        submit: "ESTAN TODOS LOS CAMPOS VACIOS VIVO, CONMIGO NO HE",
      });
    }
  }

  return (
    <div>
      <form onSubmit={Submit}>
        <input
          placeholder="FIRST NAME"
          type="text"
          name="firstName"
          value={input.firstName}
          onChange={handleChange}
        />
        {errors.firstName ? <span>{errors.firstName} </span> : ""}
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={input.lastName}
          onChange={handleChange}
        />
        {errors.lastName ? <span>{errors.lastName} </span> : ""}
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        {errors.submit ? <span>{errors.submit}</span> : ""}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default App;

