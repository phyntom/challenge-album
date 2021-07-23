import Button from './Button';
export default function SearchForm(props) {
   return (
      <div>
         <form className='form' onSubmit={props.handleSubmit}>
            <label className='label' htmlFor='query'></label>
            <input
               className='input'
               type='text'
               name='query'
               placeholder='Search by Id'
               onChange={props.handleChange}
               value={props.value}
            />
            <Button type='submit' displayText='Search' />
         </form>
      </div>
   );
}
