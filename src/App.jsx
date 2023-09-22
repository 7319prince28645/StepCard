import "./App.css";
import { useState } from "react";
import Contenedor from "./Contenedor";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
import ComponentFour from "./components/ComponentFour";
import Thanks from "./components/Thanks";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [step, setStep] = useState(1);
  const [selectedCard, setSelectedCard] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const recibirDato = (dato) => {
    setStep(dato);
  };
  const recibirSeleccion = (dato) => {
    setSelectedCard(dato);
  };
  const recibirCheck = (dato) => {
    setCheckedItems(dato);
  };
  return (
    <div className="contenedor-Principal">
      <Contenedor step={step} />
      <div className="section2">
        {step === 1 && <ComponentOne recibirDato={recibirDato} step={step} />}
        {step === 2 && (
          <ComponentTwo
            recibirDato={recibirDato}
            step={step}
            recibirSeleccion={recibirSeleccion}
          />
        )}
        {step === 3 && (
          <ComponentThree
            recibirDato={recibirDato}
            step={step}
            recibirCheck={recibirCheck}
          />
        )}
        {step === 4 && (
          <ComponentFour
            recibirDato={recibirDato}
            step={step}
            selectedCard={selectedCard}
            checkedItems={checkedItems}
          />
        )}
        {step === 5 && <Thanks recibirDato={recibirDato} />}
      </div>
    </div>
  );
}

export default App;
