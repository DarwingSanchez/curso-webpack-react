/* Importamos react */
import React from "react";
/* Importamos react-DOM */
import ReactDOM from "react-dom";
/* Importamos los componentes de React */
import App from './components/App.jsx';
/* importing styles */
import './styles/global.scss';


/* Necesitamos crear un recurso para decir hacia donde la aplicacion 
se va a importar */

ReactDOM.render(<App />, document.getElementById('app'))