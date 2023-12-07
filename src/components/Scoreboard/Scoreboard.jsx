import "./Scoreboard.css"
import PropTypes from "prop-types"

export const Scoreboard = ({scores, xPlaying}) => {

  const {xScore, oScore} = scores;
  return (
    <div className="scoreboard">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>X -  {xScore}</span>
        <span  className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}

Scoreboard.propTypes = {
    scores: PropTypes.shape({
      xScore: PropTypes.number.isRequired,
      oScore: PropTypes.number.isRequired,
    }).isRequired,
    xPlaying: PropTypes.bool.isRequired,
  };
