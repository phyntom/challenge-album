import Button from './Button';
export default function SearchForm(props) {
   return (
      <div>
         <form className='form'>
            <label className='label' htmlFor='query'></label>
            <input
               className='input'
               type='text'
               name='query'
               placeholder='i.e. 1'
               onChange={(event) => props.onChange(event)}
            />
            <Button type='button' displayText='Search' />
         </form>
      </div>
   );
}
