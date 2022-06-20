import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';

import { ObjetoContextProvider } from "./contextos/ObjetosContext"


ReactDOM.render(
    <ObjetoContextProvider>
        <App />
    </ObjetoContextProvider>, 
    document.getElementById('root')
);