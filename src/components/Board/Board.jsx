import PropTypes from 'prop-types';

import './Board.css'
import { Box } from "../Box/Box"

export const Board = ({board, onClick}) => {
  return (
    <div className='board'>
        {board.map((value, idx ) => {
        return <Box key={idx} value={value} onClick={() => onClick(idx)}/>
    })}
    </div>
  )
}

Board.propTypes = {
    board: PropTypes.arrayOf(PropTypes.string).isRequired, // Assuming board contains strings
    onClick: PropTypes.func.isRequired,
  };

