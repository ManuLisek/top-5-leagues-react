import React from 'react';
import League from './League';
import PropTypes from 'prop-types';

const Bundesliga = (props) => {

  const { highlights, standings } = props;
  const competitionName = 'GERMANY: Bundesliga';
  const leagueName = 'Bundesliga';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg';
  const alt = 'Flag of Germany';

  const table = standings.map(standing => (
    <tr className="standings__tr" key={standing.team.id}>
      <td className={`standings__td standings__td--bold ${standing.position <= 4 
        ? 'standings__td--green' 
        : (standing.position === 5
          ? 'standings__td--lightgreen'
          : (standing.position === 16
            ? 'standings__td--tomato'
            : (standing.position >= 17
              ? 'standings__td--red'
              : '')))}`}>{standing.position}</td>
      <td className="standings__td standings__td--img"><img className="standings__club-img"src={`${standing.team.crestUrl}`} alt={standing.team.name}/></td>
      <td className="standings__td standings__td--team-name">{standing.team.name}</td>
      <td className="standings__td standings__td--bold">{standing.playedGames}</td>
      <td className="standings__td">{standing.won}</td>
      <td className="standings__td">{standing.draw}</td>
      <td className="standings__td">{standing.lost}</td>
      <td className="standings__td">{standing.goalDifference}</td>
      <td className="standings__td standings__td--bold">{standing.points}</td>
    </tr>
  ));

  const tableKey = (
    <>
      <tr className="standings__tr">
        <td className="standings__key" colSpan="9">Key:</td>
      </tr>
      <tr className="standings__tr">
        <td className="standings__td--green"></td>
        <td className="standings__key-item" colSpan="8">UEFA Champions League</td>
      </tr>
      <tr className="standings__tr">
        <td className="standings__td--lightgreen"></td>
        <td className="standings__key-item" colSpan="8">UEFA Europa League</td>
      </tr>
      <tr className="standings__tr">
        <td className="standings__td--tomato"></td>
        <td className="standings__key-item" colSpan="8">Relegation Play-off</td>
      </tr>
      <tr className="standings__tr">
        <td className="standings__td--red"></td>
        <td className="standings__key-item" colSpan="8">Relegation</td>
      </tr>
    </>
  );
    
  return (
    <div>
      <League 
        leagueName={leagueName} 
        flagUrl={flagUrl} 
        alt={alt} 
        competitionName={competitionName} 
        highlights={highlights} 
        table={table}
        tableKey={tableKey}
      />
    </div>
  );
};

Bundesliga.propTypes = {
  highlights: PropTypes.array,
  standings: PropTypes.array,
};

export default Bundesliga;