import "./index.css";
function Contenedor({step}) {
  return (
    <main className="Section1">
      <div className="centrar">
        <span className={step ===1 ? 'section-main selecion' : 'section-main'}>
          <p>STEP 1</p>
          <b>YOUR INFO</b>
        </span>
        <span className={step ===2 ? 'section-main selecion' : 'section-main'}>
          <p>STEP 2</p>
          <b>SELECT PLAN</b>
        </span>
        <span className={step ===3 ? 'section-main selecion' : 'section-main'}>
          <p>STEP 3</p>
          <b>ADD-ONS</b>
        </span>
        <span className={step ===4 ? 'section-main selecion' : 'section-main'}>
          <p>STEP 4</p>
          <b>SUMMARY</b>
        </span>
      </div>
    </main>
  );
}

export default Contenedor;
