import "./estilos/Three.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
function ComponentThree({ recibirDato, step, recibirCheck }) {
  const [checkedItems, setCheckedItems] = useState([]);
  const handleCheck = (cardIndex) => {
    if (checkedItems.includes(cardIndex)) {
      // Si el elemento ya está seleccionado, lo eliminamos de la lista de seleccionados
      setCheckedItems(checkedItems.filter((item) => item !== cardIndex));
    } else {
      // Si el elemento no está seleccionado, lo añadimos a la lista de seleccionados
      setCheckedItems([...checkedItems, cardIndex]);
    }
  };
  useEffect(() => {
    recibirCheck(checkedItems);
  }, [checkedItems]);

  const handleNext = () => {
    if (checkedItems.length === 0) {
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

  return (
    <div className="componenteThree principal">
      <div className="envolver">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experiencie</p>
        <main className="cuerpo">
          <label
            className={checkedItems.includes(1) ? "profile checked" : "profile"}
          >
            <input
              type="checkbox"
              id="online"
              name="online"
              value="online"
              onClick={() => handleCheck(1)}
            />
            <span>
              <p>Online Service</p>
              <p>Acces to multiplayer games</p>
            </span>
            <p className="positionLast">+$1/mo</p>
          </label>
          <label
            className={checkedItems.includes(2) ? "profile checked" : "profile"}
          >
            <input
              type="checkbox"
              id="cloud"
              name="cloud"
              value="cloud"
              onClick={() => handleCheck(2)}
            />
            <span>
              <p>Larger Storage</p>
              <p>Extra 1TB of cloud save</p>
            </span>
            <p className="positionLast">+$2/mo</p>
          </label>
          <label
            className={checkedItems.includes(3) ? "profile checked" : "profile"}
          >
            <input
              type="checkbox"
              id="pro"
              name="pro"
              value="pro"
              onClick={() => handleCheck(3)}
            />
            <span>
              <p>Customization Profile</p>
              <p>Custom theme on your profile</p>
            </span>
            <p className="positionLast">+$2/mo</p>
          </label>
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

export default ComponentThree;
