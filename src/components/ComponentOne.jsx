import React, { useState } from "react";
import "./estilos/componentOne.css";
import { ToastContainer, toast } from "react-toastify";
function ComponentOne({ recibirDato, step }) {
  const [datos, setDatos] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    if (datos.name === "" || datos.email === "" || datos.phone === "") {
      toast.info("Por favor rellene todos los campos!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      recibirDato(step + 1);
    }
  };

  return (
    <div className="componenteOne principal">
    <div className="envolver">
      <h2>Personal info</h2>
      <p>Please provide your name, email adress, and phone number</p>
      <main className="mobileFirst">
        <span>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            onChange={handleInputChange}
            value={datos.name}
          />
        </span>
        <span>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            onChange={handleInputChange}
            value={datos.email}
          />
        </span>
        <span>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your phone number"
            onChange={handleInputChange}
            value={datos.phone}
          />
        </span>
        <ToastContainer />
      </main>
      </div>
      <div className="botarFondo">
        <button className="next" onClick={() => handleClick()}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default ComponentOne;
