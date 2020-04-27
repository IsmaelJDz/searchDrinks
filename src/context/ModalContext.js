import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ModalContext = createContext();

export default function ModalProvider(props) {

  const [ idReceta, setIdReceta ] = useState(null);
  const [ informacion, setReceta ] = useState({});

  useEffect(() => {
    const obtenerReceta = async () => {
      if(!idReceta) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
      const response = await axios.get(url)
      setReceta(response.data.drinks[0])
    }
    obtenerReceta();
  }, [idReceta])

  return (
    <div>
      <ModalContext.Provider value={{informacion, setIdReceta, setReceta}}>
        {props.children}
      </ModalContext.Provider>
    </div>
  )
}
