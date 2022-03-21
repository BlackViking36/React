import React from 'react';
import NavBar from './Components/NavBar/NavBar';

//IMPORTANTE: <P></P> & <p></p> => no son lo mismo, el primero es una variable y el segundo es una etiqueta html
const App = () =>{
  return(
    <NavBar />
  );
};


export default App; // sirve para darle a los otros archivos al archivo App
