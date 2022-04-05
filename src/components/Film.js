import React from 'react';

const Film = ({url, name}) => {
    return ( 
        <>
            <ul><li><a href={url}>{name}</a></li></ul>
        </>
    )
}
   
    
export default Film;

