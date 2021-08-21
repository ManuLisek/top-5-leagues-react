import React from 'react';
import League from './League';
import PropTypes from 'prop-types';

const PrimeraDivision = (props) => {

  const { highlights } = props;
  const competitionName = 'SPAIN: La Liga';
  const leagueName = 'Premera Division';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg';
  const alt = 'Flag of Spain';
  
  return (
    <div>
      <League leagueName={leagueName} flagUrl={flagUrl} alt={alt} competitionName={competitionName} highlights={highlights}/>
    </div>
  );
};

PrimeraDivision.propTypes = {
  highlights: PropTypes.array,
};

export default PrimeraDivision;