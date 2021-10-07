import React from 'react';
import { useState, useRef } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import './Match.scss';

function Match(props) {
  const {match} = props;
  const host = match.side1.name;
  const guest = match.side2.name;
  const [isMatchActive, setIsMatchActive] = useState(false);
  const video = useRef(null);
  const handleToggleShowVideo = () => {
    setIsMatchActive(prevState => !prevState);
    const iframe = video.current.querySelector('iframe._scorebatEmbeddedPlayer_');
    if ( isMatchActive ) {
      setTimeout(function reloadIframe(){
        const iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }, 500);
    }
  };

  return (
    <>
      <li className="match">
        <div className="match__teams">
          <div className="match__team">{host}</div>
          <div className="match__vs"> vs </div>
          <div className="match__team">{guest}</div>
          <div className="match__arrow-container" onClick={handleToggleShowVideo}>
            <i className={`fas fa-arrow-alt-circle-down match__arrow ${isMatchActive ? 'match__arrow--active' : ''}`}></i>
          </div>
        </div>
        <div className={`match__video ${isMatchActive ? 'match__video--active' : ''}`} ref={video}>
          {ReactHtmlParser(`${match.embed}`)}
        </div>
      </li>
    </>
  );
}

Match.propTypes = {
  match: PropTypes.object,
};

export default Match;