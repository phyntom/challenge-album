import React from 'react';

export default function AlbumCard(props) {
   const { title, url } = props;
   return (
      <div className='card'>
         <img className='card-img' src={`${url}`} alt={title + ' poster'} />
         <div className='card-content'>
            <h3 className='card-title'>{title}</h3>
            {/* <p className='card-desc'>{movie.overview}</p> */}
         </div>
      </div>
   );
}
