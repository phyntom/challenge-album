import React from 'react';
import { AnnotationIcon } from '@heroicons/react/outline';
export default function AlbumCard(props) {
   const { title, url } = props;
   return (
      <div className='bg-white rounded overflow-hidden shadow-md'>
         <img src={`${url}`} alt='' className='w-full h-32 sm:h-48 object-cover' />
         <div className='m-4'>
            <span className='font-bold'>
               <AnnotationIcon className='text-blue-900 h-5 w-5' />
            </span>
            <span className='block font-bold text-cyan-900 text-sm'>{title}</span>
         </div>
      </div>
   );
}
