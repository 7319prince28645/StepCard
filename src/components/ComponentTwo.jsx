import "./estilos/Two.css";
import arcade from "./iconos/icon-arcade.svg";
import advanced from "./iconos/icon-advanced.svg";
import pro from "./iconos/icon-pro.svg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
function ComponentTwo({ recibirDato, step, recibirSeleccion }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [card, setCard] = useState(true);

  const selectedPrice = card ? [9, 12, 15] : [99, 120, 150]; // [9, 12, 15

  const handClick = () => {
    setCard(!card);
  };

  const handleClick = (dato) => {
    handleCardClick(dato);
    recibirDato2(dato);
  };
  const handleCardClick = (cardIndex) => {
    if (selectedCard === cardIndex) {
      setSelectedCard(null);
    } else {
      setSelectedCard(cardIndex);
    }
  };
  const handleNext = () => {
    if (selectedCard === null) {
      toast.info("Por favor seleccione un campo!", {
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

  const recibirDato2 = (dato) => {
    recibirSeleccion(selectedPrice[dato]);
  };

  return (
    <div className="ComponenteTwo principal">
      <div className="envolver">
        <h2>Select your Plan</h2>
        <p>You have the option of monthly of yearly biling</p>
        <main className="cards">
          <span className="elegir">
            <article
              className={
                selectedCard === 0 ? "selected-card opciones" : "opciones"
              }
              onClick={() => handleClick(0)}
            >
              <img src={arcade} alt="arcade" className="imagen" />
              <b>Arcade</b>
              {card ? (
                <p>$9/mo</p>
              ) : (
                <>
                  <p value="99">$99/year</p>
                  <b>2 months free</b>
                </>
              )}
            </article>
            <article
              className={
                selectedCard === 1 ? "selected-card opciones" : "opciones"
              }
              onClick={() => handleClick(1)}
            >
              <img src={advanced} alt="advanced" className="imagen" />
              <b>Advanced</b>
              {card ? (
                <p value="12">$12/mo</p>
              ) : (
                <>
                  <p value="120">$120/year</p>
                  <b>2 months free</b>
                </>
              )}
            </article>
            <article
              className={
                selectedCard === 2 ? "selected-card opciones" : "opciones"
              }
              onClick={() => handleClick(2)}
            >
              <img src={pro} alt="pro" className="imagen" />
              <b>Pro</b>
              {card ? (
                <p value="15">$15/mo</p>
              ) : (
                <>
                  <p value="150">$150/year</p>
                  <b>2 months free</b>
                </>
              )}
            </article>
          </span>
          <div className="switch-button centrarBotones">
            <p>Monthly</p>
            <input
              type="checkbox"
              name="switch-button"
              id="switch-label"
              className="switch-button__checkbox"
              onClick={() => handClick()}
            />
            <label
              htmlFor="switch-label"
              className="switch-button__label"
            ></label>
            <p>Yearly</p>
          </div>
        </main>
      </div>
      <div className="botones">
        <button className="back" onClick={() => recibirDato(step - 1)}>
          Go back
        </button>
        <button className="soloNext" onClick={() => handleNext()}>
          Next
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </div>
  );
}

export default ComponentTwo;
