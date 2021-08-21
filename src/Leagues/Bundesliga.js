import React from 'react';
import League from './League';
import PropTypes from 'prop-types';

const Bundesliga = (props) => {

  const { highlights } = props;
  const competitionName = 'GERMANY: Bundesliga';
  const leagueName = 'Bundesliga';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg';
  const alt = 'Flag of Germany';
    
  return (
    <div>
      <League leagueName={leagueName} flagUrl={flagUrl} alt={alt} competitionName={competitionName} highlights={highlights}/>
    </div>
  );
};

Bundesliga.propTypes = {
  highlights: PropTypes.array,
};

export default Bundesliga;