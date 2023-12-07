import './ResetButton.css'
import PropTypes from 'prop-types';


export const ResetButton = ({resetBoard}) => {
  return (
    <button className='reset-btn' onClick={resetBoard}>Reset</button>
  )
}

ResetButton.propTypes = {
    resetBoard: PropTypes.func.isRequired,
  };