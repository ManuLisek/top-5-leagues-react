import React from 'react';
import League from './League';

const PremierLeague = () => {

  const leagueName = 'Premier League';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg';
  const alt = 'Flag of United Kingdom';
    
  return (
    <div>
      <League leagueName={leagueName} flagUrl={flagUrl} alt={alt}/>
    </div>
  );
};

export default PremierLeague;