import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {
    
    const filmNodes = film.map(film => {
        return(
            <Film title={film.title} key={films.id} url={film.url}/>
        )
    });

    return (
        <>
            {filmNodes}
        </>

    );
}

export default FilmList; 