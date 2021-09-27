import React from 'react';
import League from './League';
import PropTypes from 'prop-types';

const Ligue1 = (props) => {

  const {standings} = props;
  const competitionName = 'FRANCE: Ligue 1';
  const leagueName = 'Ligue 1';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg';
  const alt = 'Flag of France';

  const table = standings.map(standing => (
    <tr className="standings__tr" key={standing.team.id}>
      <td className={`standings__td standings__td--bold ${standing.position <= 2 
        ? 'standings__td--green' 
        : (standing.position === 3
          ? 'standings__td--limegreen'
          : (standing.position === 4
            ? 'standings__td--lightgreen'
            : (standing.position === 5
              ? 'standings__td--orange'
              : (standing.position === 18
                ? 'standings__td--tomato'
                : (standing.position >= 19
                  ? 'standings__td--red'
                  : '')))))}`}>{standing.position}</td>
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
        <td className="standings__td--limegreen"></td>
        <td className="standings__key-item" colSpan="8">UEFA Champions League Qualifiers</td>
      </tr>
      <tr className="standings__tr">
        <td className="standings__td--lightgreen"></td>
        <td className="standings__key-item" colSpan="8">UEFA Europa League</td>
      </tr>
      <tr className="standings__tr">
        <td className="standings__td--orange"></td>
        <td className="standings__key-item" colSpan="8">UEFA Conference League Qualifiers</td>
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
        {...props}
        competitionName={competitionName} 
        leagueName={leagueName} 
        flagUrl={flagUrl} 
        alt={alt}
        table={table}
        tableKey={tableKey}
      />
    </div>
  );
};

Ligue1.propTypes = {
  standings: PropTypes.array,
};

export default Ligue1;