import React from 'react';
import League from '../components/League/League';
import PropTypes from 'prop-types';

const PremierLeague = (props) => {

  const {standings} = props;
  const competitionName = 'ENGLAND: Premier League';
  const leagueName = 'Premier League';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg';
  const alt = 'Flag of United Kingdom';

  const table = standings.map(standing => (
    <tr className="standings__tr" key={standing.team.id}>
      <td className={`standings__td standings__td--bold ${standing.position <= 4 
        ? 'standings__td--green' 
        : (standing.position === 5
          ? 'standings__td--lightgreen'
          : (standing.position >= 18
            ? 'standings__td--red'
            : ''))}`}>{standing.position}</td>
      <td className="standings__td standings__td--img"><img className="standings__club-img"src={`${standing.team.crestUrl}`} alt={standing.team.name} width="17" height="17"/></td>
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

PremierLeague.propTypes = {
  standings: PropTypes.array,
};

export default PremierLeague;