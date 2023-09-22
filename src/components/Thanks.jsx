import Icon from './iconos/icon-thank-you.svg'
function Thanks({recibirDato}) {
  const acept =(e) =>{
    e.preventDefault();
    recibirDato(1);
  }
  return (
    <div className="thanks">
        <span>
            <img src={Icon} alt="icono de gracias" />
        </span>
        <h2>Thanks you!</h2>
        <p>Gracias por la confirmacion de su subscripcion! Ya podras usar la plataforma. Si necesitas ayuda, por favor contactarse mediante email a richardlafeesmuygrande@cutoguadalupe.com</p>
        <button onClick={acept}>Aceptar</button>
    </div>
  )
}

export default Thanks;