import React from 'react';
import AlbumCard from './AlbumCard';

export default function AlbumList(props) {
   const { albumPhotos, itemsPerPage } = props;
   return (
      <div className='card-list'>
         {albumPhotos.map((albumPhoto) => (
            <AlbumCard title={albumPhoto.title} url={albumPhoto.thumbnailUrl} />
         ))}
      </div>
   );
}
