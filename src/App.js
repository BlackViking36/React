import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer  from "./Components/ItemListContainer/ItemListContainer";
import ItemList from "./Components/ItemListContainer/ItemList";

//IMPORTANTE: <P></P> & <p></p> => no son lo mismo, el primero es una variable y el segundo es una etiqueta html
const App = () =>{

  return(
    <>
      <div className="App">
        <NavBar/>
        <ItemListContainer greeting="Caps de calidad" />
        <ItemList />
      </div>
    </>
  );
};

export default App;




