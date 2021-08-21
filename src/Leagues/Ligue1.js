import React from 'react';
import League from './League';
import PropTypes from 'prop-types';

const Ligue1 = (props) => {

  const { highlights } = props;
  const competitionName = 'FRANCE: Ligue 1';
  const leagueName = 'Ligue 1';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg';
  const alt = 'Flag of France';
    
  return (
    <div>
      <League leagueName={leagueName} flagUrl={flagUrl} alt={alt} competitionName={competitionName} highlights={highlights}/>
    </div>
  );
};

Ligue1.propTypes = {
  highlights: PropTypes.array,
};

export default Ligue1;