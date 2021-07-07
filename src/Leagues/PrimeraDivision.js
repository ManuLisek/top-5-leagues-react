import React from 'react';
import League from './League';

const PrimeraDivision = () => {

  const leagueName = 'Premera Division';
  const flagUrl = 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg';
  const alt = 'Flag of Spain';
  
  return (
    <div>
      <League leagueName={leagueName} flagUrl={flagUrl} alt={alt}/>
    </div>
  );
};

export default PrimeraDivision;