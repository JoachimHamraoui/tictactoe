// import React from 'react'
import PropTypes from 'prop-types';

import './Box.css';

export const Box = ({value, onClick}) => {
    
  const style = value === "X" ? "box x" : "box o";  
  return (
        <button className={style} onClick={onClick}>{value}</button>
  )
}

Box.propTypes = {
    value: PropTypes.oneOf(['X', 'O']).isRequired,
    onClick: PropTypes.func.isRequired,
  };
