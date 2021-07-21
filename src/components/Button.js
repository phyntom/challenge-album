import PropTypes from 'prop-types';
export default function Button(props) {
   if (props.type === 'button') {
      return (
         <div>
            <button type='button' className='button'>
               {props.displayText}
            </button>
         </div>
      );
   } else if (props.type === 'submit') {
      return (
         <div>
            <button type='submit' className='button'>
               {props.displayText}
            </button>
         </div>
      );
   }
}

Button.defaultProps = {
   type: 'button',
   displayText: 'Button',
};

Button.propTypes = {
   displayText: PropTypes.string.isRequired,
};
