import SearchForm from '../components/SearchForm';

export default function Albums() {
   // const [albumId, setAlbumId] = useState('');

   const handleInputChange = (event) => {
      console.log(event);
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
         [name]: value,
      });
   };

   return (
      <div className='container'>
         <SearchForm onChange={handleInputChange} />
      </div>
   );
}
