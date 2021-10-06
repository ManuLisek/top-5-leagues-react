import axios from 'axios';

export const getAllScorers = async () => {
  const urlScorersPL = 'https://api.football-data.org/v2/competitions/PL/scorers';
  const urlScorersPD = 'https://api.football-data.org/v2/competitions/PD/scorers';
  const urlScorersBL1 = 'https://api.football-data.org/v2/competitions/BL1/scorers';
  const urlScorersSA = 'https://api.football-data.org/v2/competitions/SA/scorers';
  const urlScorersFL1 = 'https://api.football-data.org/v2/competitions/FL1/scorers';

  const allUrls = [urlScorersPL, urlScorersPD, urlScorersBL1, urlScorersSA, urlScorersFL1];

  const getAllUrls = allUrls.map(url => {
    const getStandings = axios.get(url,
      {headers: {
        'X-Auth-Token': process.env.REACT_APP_API_KEY, 
      }});
    return getStandings;
  });

  return await axios.all([...getAllUrls])
    .then(
      axios.spread((...allData) => {
        const allScorers = {
          topScorersPL: allData[0].data.scorers,
          topScorersPD: allData[1].data.scorers,
          topScorersBL1: allData[2].data.scorers,
          topScorersSA: allData[3].data.scorers,
          topScorersFL1: allData[4].data.scorers,
        };

        return allScorers;
      })
    );
};

