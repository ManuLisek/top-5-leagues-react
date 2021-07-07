import React from 'react';
import League from './League';

const Ligue1 = () => {

  const leagueName = 'Ligue 1';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg';
  const alt = 'Flag of France';
    
  return (
    <div>
      <League leagueName={leagueName} flagUrl={flagUrl} alt={alt}/>
    </div>
  );
};

export default Ligue1;