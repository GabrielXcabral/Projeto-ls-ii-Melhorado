import { useContext, createContext, useState } from "react";
import api from "../services/api";

// const [objetos, setObjetos] = useState([])
// const [show, setShow] = useState(false);  --> Vão ser passados para dentro do ObjetoContextProvider
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

export const ObjetoContext = createContext ({});

export function ObjetoContextProvider({ children }){
    const [objetos, setObjetos] = useState([]);
    const [exibFormObjetos, setExibFormObjetos] = useState(false);

    const handleClose = () => {
        setExibFormObjetos(!exibFormObjetos);
    };

    const handleCreateObjetos = async (objeto) => {
        const novoObjeto= await api.create(objeto);

        setObjetos(...objetos, ...novoObjeto)

        handleClose();
    }



    return(
        <ObjetoContext.Provider 
            value={{
                objetos,
                setObjetos,
                exibFormObjetos,
                setExibFormObjetos,
                handleClose,
                handleCreateObjetos,
            }}
        >
            {children}
        </ObjetoContext.Provider>

    )
};

export function useObjeto (){
    return useContext (ObjetoContext);
}
