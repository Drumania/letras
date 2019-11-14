import React from 'react';

function InfoArtista({info}){

    if ( Object.keys(info).length === 0 ) return null;

    return(
        <p>
            <img className="img-fluid" src={info.strArtistThumb} alt="logo artista" />
        </p>
    )       
}

export default InfoArtista;
