import React from 'react';

const Film = ({url, name}) => {
    return ( 
        <div class='list'>
            <ul><li><a href={url} target='blank'>{name}</a></li></ul>
        </div>
    )
}
   
    
export default Film;

