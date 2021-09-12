import React from 'react';
import Match from '../Match/Match';
import PropTypes from 'prop-types';
import './Highlights.scss';



const Highlights = (props) => {
  const {highlights, competitionName, leagueName, flagUrl, alt} = props;
  const singleLeague = highlights.filter(item => item.competition.name === competitionName);

  const highlightsList = singleLeague.map((item, i, array) => {

    return(
      i === 0 || array[i - 1].date.substring(0, 10) !== item.date.substring(0, 10)
        ?   <li className="highlights__match-container" key={item.title}>
          <fieldset className="highlights__fieldset">
            <legend className="highlights__date">{item.date.substring(0, 10)}</legend>
          </fieldset>
          <ul className="highlights__match" >
            <Match match={item}/>
          </ul>
        </li>
        :   (array[i - 1].date.substring(0, 10) === item.date.substring(0, 10)
          ?   <li className="highlights__match-container" key={item.title}>
            <ul className="highlights__match" >
              <Match match={item}/>
            </ul>
          </li>
          :   null
        )
    );});

  return(
    <div className="highlights">
      <header className="highlights__header">
        <div className="highlights__flag-container">
          <img src={flagUrl} className="highlights__image" alt={alt}/>
        </div>
        <h2 className="highlights__league-name">{leagueName}</h2>
      </header>
      <ul className="highlights__matches-list">
        {highlightsList}
      </ul>
    </div>
  );};

Highlights.propTypes = {
  highlights: PropTypes.array,
  competitionName: PropTypes.string,
  leagueName: PropTypes.string,
  flagUrl: PropTypes.string,
  alt: PropTypes.string,
};

export default Highlights;