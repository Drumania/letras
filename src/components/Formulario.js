import React, { useState  } from 'react';

function Formulairo({consultarApiLetra}) {

    const [busqueda, agregarBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const actualizarState = e => {
        agregarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
        
    }

    const handleSubmit = e => {
        e.preventDefault();

        consultarApiLetra(busqueda);
    }

    return ( 
        <form onSubmit={handleSubmit} className="row col-12 mb-5 pb-5 border-bottom" >
            <div className="col-12 col-lg-4">
                <input type="text" class="form-control" name="artista" placeholder="Banda. Ej: Metallica" onChange={actualizarState} />            
            </div>
    
            <div className="col-12 col-lg-4">
                <input type="text" class="form-control" name="cancion" placeholder="Cancion. Ej: One" onChange={actualizarState}  />
            </div>

            <button type="submit" className="col-12 col-lg-4 btn btn-primary" >Buscar</button>
        </form>
        );

}
 
export default Formulairo;