import React from 'react';
import PropTypes from 'prop-types';
import './Scorers.scss';


const Scorers = (props) => {
  const {scorers} = props;
  const scorersList = scorers.map((scorer, i) => (
    <tr key={scorer.player.id}>
      <td className="scorers__td scorers__td--bold">{i + 1}</td>
      <td className="scorers__td scorers__td--img">
        <img className="scorers__club-img" src={`https://crests.football-data.org/${scorer.team.id}.svg`} alt="Team logo"/>
      </td>
      <td className="scorers__td scorers__td--player-name">{scorer.player.name}</td>
      <td className="scorers__td scorers__td--bold">{scorer.numberOfGoals}</td>
    </tr>
  ));

  return(
    <table className="scorers">
      <thead className="scorers__thead">
        <tr className="scorers__tr">
          <th className="scorers__th">#</th>
          <th className="scorers__th" colSpan="2">Player</th>
          <th className="scorers__th">Goals</th>
        </tr>
      </thead>
      <tbody className="scorers__tbody">
        {scorersList}
      </tbody>
    </table>
  );};

Scorers.propTypes = {
  scorers: PropTypes.array,
};


export default Scorers;