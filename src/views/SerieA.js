import React from 'react';
import PropTypes from 'prop-types';
import League from '../components/League/League';

const SerieA = (props) => {
  const { standings } = props;
  const competitionName = 'ITALY: Serie A';
  const leagueName = 'Serie A';
  const flagUrl =
    'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg';
  const alt = 'Flag of Italy';

  const table = standings.map((standing) => (
    <tr className="standings__tr" key={standing.team.id}>
      <td
        className={`standings__td standings__td--bold ${
          standing.position <= 4
            ? 'standings__td--green'
            : standing.position === 5
            ? 'standings__td--limegreen'
            : standing.position === 6
            ? 'standings__td--lightgreen'
            : standing.position >= 18
            ? 'standings__td--red'
            : ''
        }`}
      >
        {standing.position}
      </td>
      <td className="standings__td standings__td--img">
        <img
          className="standings__club-img"
          src={`${standing.team.crestUrl}`}
          alt={standing.team.name}
          width="17"
          height="17"
        />
      </td>
      <td className="standings__td standings__td--team-name">
        {standing.team.name}
      </td>
      <td className="standings__td standings__td--bold">
        {standing.playedGames}
      </td>
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
        <td className="standings__key" colSpan="9">
          Key:
        </td>
      </tr>
      <tr className="standings__tr">
        <td className="standings__td--green"></td>
        <td className="standings__key-item" colSpan="8">
          UEFA Champions League
        </td>
      </tr>
      <tr className="standings__tr">
        <td className="standings__td--limegreen"></td>
        <td className="standings__key-item" colSpan="8">
          UEFA Europa League
        </td>
      </tr>
      <tr className="standings__tr">
        <td className="standings__td--lightgreen"></td>
        <td className="standings__key-item" colSpan="8">
          UEFA Conference League Qualifiers
        </td>
      </tr>
      <tr className="standings__tr">
        <td className="standings__td--red"></td>
        <td className="standings__key-item" colSpan="8">
          Relegation
        </td>
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

SerieA.propTypes = {
  standings: PropTypes.array,
};

export default SerieA;
