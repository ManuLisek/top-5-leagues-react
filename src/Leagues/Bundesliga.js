import React from 'react';
import League from './League';

const Bundesliga = () => {

  const leagueName = 'Bundesliga';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg';
  const alt = 'Flag of Germany';
    
  return (
    <div>
      <League leagueName={leagueName} flagUrl={flagUrl} alt={alt}/>
    </div>
  );
};

export default Bundesliga;