import React from 'react';
import AlbumCard from './AlbumCard';

export default function AlbumList(props) {
   const { albumPhotos } = props;
   return (
      <div className='grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-10'>
         {albumPhotos.map((albumPhoto) => (
            <AlbumCard key={albumPhoto.id} title={albumPhoto.title} url={albumPhoto.thumbnailUrl} />
         ))}
      </div>
   );
}
