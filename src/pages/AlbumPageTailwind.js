import { useState } from 'react';
import axios from 'axios';
import AlbumList from '../component-tailwind/AlbumList';

export default function AlbumPageTailwind(props) {
   const [albumId, setAlbumId] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [albumPhotos, setAlbumPhotos] = useState([]);

   const handleInputChange = (event) => {
      const { target } = event;
      // const value = target.type === 'checkbox' ? target.checked : target.value;
      setAlbumId(target.value);
   };

   const handleSubmitForm = (event) => {
      event.preventDefault();
      fetchAlbumPhotos(albumId);
   };

   const fetchAlbumPhotos = async (query) => {
      try {
         setIsLoading(true);
         const result = await axios.get(
            `https://jsonplaceholder.typicode.com/albums/${query}/photos`
         );
         if (result.data) {
            setIsLoading(false);
            setAlbumPhotos(result.data);
         }
      } catch (err) {
         console.error(`An error occurs `, err);
      }
   };
   return (
      <div className='container mx-auto'>
         <div className='flex justify-center'>
            <form className='flex w-3/4 border-b py-1' onSubmit={handleSubmitForm}>
               <input
                  type='text'
                  name='query'
                  placeholder='Search by Id . . .'
                  onChange={handleInputChange}
                  value={albumId}
                  className='block w-full px-3 py-2 focus:bg-transparent bg-transparent ring-transparent placeholder-gray-500 text-gray-900 focus:outline-none'
               />
               <button
                  type='submit'
                  className='bg-indigo-500 block text-sm font-light rounded-full mx-5 px-6 w-80 text-center text-gray-100'
               >
                  Get Album Photos By Id
               </button>
            </form>
         </div>
         {isLoading ? <h2>Loading ....</h2> : ''}
         {albumPhotos.length > 0 ? <AlbumList albumPhotos={albumPhotos} /> : ''}
      </div>
   );
}
