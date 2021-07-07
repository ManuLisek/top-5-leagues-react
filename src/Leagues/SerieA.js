import React from 'react';
import League from './League';

const SerieA = () => {

  const leagueName = 'Serie A';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg';
  const alt = 'Flag of Italy';
    
  return (
    <div>
      <League leagueName={leagueName} flagUrl={flagUrl} alt={alt}/>
    </div>
  );
};

export default SerieA;