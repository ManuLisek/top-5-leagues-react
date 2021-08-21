import React from 'react';
import League from './League';
import PropTypes from 'prop-types';

const PremierLeague = (props) => {

  const { highlights } = props;
  const competitionName = 'ENGLAND: Premier League';
  const leagueName = 'Premier League';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg';
  const alt = 'Flag of United Kingdom';
    
  return (
    <div>
      <League leagueName={leagueName} flagUrl={flagUrl} alt={alt} competitionName={competitionName} highlights={highlights}/>
    </div>
  );
};

PremierLeague.propTypes = {
  highlights: PropTypes.array,
};

export default PremierLeague;