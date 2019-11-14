import React, { useState, useEffect  }  from 'react';
import Formulairo from './components/Formulario';
import Cancion from './components/Cancion';
import InfoArtista from './components/InfoArtista';
import axios from 'axios';

function App() {

  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]); 
  const [info, agregarInfo] = useState({});

  const consultarApiLetra = async busqueda => {
    const {artista,cancion} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    const resultado = await axios(url);

    agregarArtista(artista);
    agregarLetra(resultado.data.lyrics);

  }

  const consultarApiInfo = async () => {

    if (artista) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const resultado = await axios(url);  
      agregarInfo(resultado.data.artists[0]);
    }

  }

  useEffect(
    () => {
      consultarApiInfo();
    },[artista]
  )

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12 my-4 text-center">Letras de Canciones</h1>

        <Formulairo consultarApiLetra={consultarApiLetra} />      

        <div className="col-12 row">
          <div className="col-6">
           <InfoArtista info={info} />
          </div>
          <div className="col-6">
            <Cancion letra={letra} />
          </div>
            
        </div>

      </div>
    </div>
  );
}

export default App;
