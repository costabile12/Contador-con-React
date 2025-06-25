import './App.css';
import mcLarenLogo from './imagenes/logo.png';
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  // [Valor que queremos usar como estado, funcion que nos permite actualizarlo (por convencion se usa set para asignar seguida del nombre del estado osea setEstadoName)]
  const [numeroClics, setNumeroClics] = useState(0); // el 0 del parametro de useState es el valor inicial del contador

  const manejarClic = () => {
    setNumeroClics(numeroClics + 1);
  };

  const reiniciarContador = () => {
    setNumeroClics(0);
  };

  return (
    <div className="App">

      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={mcLarenLogo}
          alt='Logo de freecodecamp' />
      </div>

      <div className='contenedor-principal'>

        <Contador numeroClics={numeroClics} />

        <Boton
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic} />

        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
          
      </div>
    </div>
  );
}

export default App;
