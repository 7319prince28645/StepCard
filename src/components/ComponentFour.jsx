import "./estilos/Four.css";
import { ToastContainer, toast } from "react-toastify";
function ComponentFour({ recibirDato, step, selectedCard, checkedItems }) {
  const valor = {
    9: "Arcade(monthly)",
    12: "Advanced(monthly)",
    15: "Pro(monthly)",
    99: "Arcade(yearly)",
    120: "Advanced(yearly)",
    150: "Pro(yearly)",
  }[selectedCard];

  const descripcion = {
    1: "Online Service",
    2: "Larger Storage",
    3: "Customization Profile",
  };
  const price = {
    1: 1,
    2: 2,
    3: 2,
  };
  const handleChange = () => {
    toast.warning("Por favor, Seleccione correctamente!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(() => {
      recibirDato(2);
    }, 2500);
  };
  let totalPrice = selectedCard;

  return (
    <div className="componenteFour principal">
      <div className="envolver">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="contenedor">
          <main className="fishingEnvolver">
            <span>
              <div>
                <p className="arcade">{valor}</p>
                <p className="change" onClick={() => handleChange()}>
                  Change
                </p>
              </div>
              <p>${selectedCard}/mo</p>
            </span>
            <hr />
            {checkedItems.map(
              (item, index) => (
                (totalPrice += price[item]),
                (
                  <span key={index} className="spanes">
                    <p className="arcade">{descripcion[item]}</p>
                    <p className="empujar">+${price[item]}/mo</p>
                  </span>
                )
              )
            )}
          </main>
          <span className="finishingLast">
            <p className="opaco">Total(per month)</p>
            <p className="total">+${totalPrice}/mo</p>
          </span>
        </div>
      </div>
      <div className="botones">
        <button className="back" onClick={() => recibirDato(step - 1)}>
          Go back
        </button>
        <button className="soloNext" onClick={() => recibirDato(step + 1)}>
          Confirm
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

export default ComponentFour;
