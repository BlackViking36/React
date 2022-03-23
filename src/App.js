import React from 'react';
import NavBar from './Components/NavBar/NavBar';

//IMPORTANTE: <P></P> & <p></p> => no son lo mismo, el primero es una variable y el segundo es una etiqueta html
const App = () =>{

  //const name = "Nicolas";
  
  return(
    <NavBar />
    /*
    <>
      <NavBar id="navbar" /> componente xq empieza con mayuscula (SIEMPRE)
      <navbar id="navbar"></navbar> tag de HTML
    </>
    */
  );
};


export default App; // sirve para darle a los otros archivos al archivo App


/*
class MiComponenteClass extends React.Component {
    render(){
        return <h1>Hola Mundo!!</h1>
    }
}
*/
//NOTA: el metodo render es como un return de una funcion. El extend, extiende las propiedades de la class al componente o a lo q yo quiera extender.

