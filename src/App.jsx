import { useState } from 'react';
import Perfil from './components/Perfil';
import Formulario from './components/Formulario';

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  return (

    <>
      <Perfil nome='Nicacio' endereco='https://github.com/nicaciobasilio.png'/>
      { formularioEstaVisivel && (
        <Formulario />
      ) }
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>toogle form</button>
    </>
  )
}

export default App
