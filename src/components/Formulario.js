import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

function Formulario() {

  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  })

  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, setConsultar } = useContext(RecetasContext)

  const obtenerDatosReceta = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  return (
    <>
      <form className="col-12" 
        onSubmit={e => {
          e.preventDefault();
          buscarRecetas(busqueda)
          setConsultar(true)
        } 
      }>
          <fieldset>
            <legend>Busca bebidas por Categoria o Ingrediente</legend>
          </fieldset>

          <div className="row mt-4">
            <div className="col-md-4">
              <input 
                name="nombre" 
                type="text" 
                className="form-control" 
                placeholder="Buscar por Ingrediente"
                onChange={obtenerDatosReceta}
              />
            </div>
            <div className="col-md-4">
              <select 
                name="categoria" 
                className="form-control"
                onChange={obtenerDatosReceta}
              >
                <option value="">-- Selecciona Categoría --</option>
                {
                  categorias.map((categoria, index) => (
                    <option key={index} value={categoria.strCategory} >{categoria.strCategory}</option>
                  ))
                }
              </select>
            </div>
            <div className="col-md-4">
              <input 
                type="submit" 
                className="btn btn-block btn-primary"
                value="Buscar bebidas"
              />
            </div>
          </div>

      </form>
    </>
  )
}

export default Formulario
