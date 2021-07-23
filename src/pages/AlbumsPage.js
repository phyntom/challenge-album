import { useState } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import AlbumList from '../components/AlbumList';

export default function Albums() {
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
            console.log(result.data);
         }
      } catch (err) {
         console.error(`An error occurs `, err);
      }
   };

   return (
      <div className='container'>
         <SearchForm
            handleChange={handleInputChange}
            value={albumId}
            handleSubmit={handleSubmitForm}
         />
         {isLoading ? <h2>Loading ....</h2> : ''}
         {albumPhotos.length > 0 ? <AlbumList albumPhotos={albumPhotos} /> : ''}
      </div>
   );
}
