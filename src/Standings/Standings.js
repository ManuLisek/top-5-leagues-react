import React from 'react';
import PropTypes from 'prop-types';
import './Standings.scss';

const Standings = (props) => {
  const {haveStandingsError, table, tableKey} = props;

  return(
    !haveStandingsError
      ?   <table className="standings">
        <thead className="standings__thead">
          <tr className="standings__tr">
            <th className="standings__th">#</th>
            <th className="standings__th" colSpan="2">Club</th>
            <th className="standings__th">Pl</th>
            <th className="standings__th">W</th>
            <th className="standings__th">D</th>
            <th className="standings__th">L</th>
            <th className="standings__th">+/-</th>
            <th className="standings__th">Pts</th>
          </tr>
        </thead>
        <tbody className="standings__tbody">
          {table}
          {tableKey}
        </tbody>
      </table>
      :  ''
  );
};

Standings.propTypes = {
  haveStandingsError: PropTypes.bool,
  table: PropTypes.array,
  tableKey: PropTypes.object,
};
  
export default Standings;