import React from 'react';
import League from './League';
import PropTypes from 'prop-types';

const SerieA = (props) => {

  const { highlights } = props;
  const competitionName = 'ITALY: Serie A' ;
  const leagueName = 'Serie A';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg';
  const alt = 'Flag of Italy';
    
  return (
    <div>
      <League leagueName={leagueName} flagUrl={flagUrl} alt={alt} competitionName={competitionName} highlights={highlights}/>
    </div>
  );
};

SerieA.propTypes = {
  highlights: PropTypes.array,
};

export default SerieA;