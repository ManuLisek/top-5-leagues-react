import axios from 'axios';

const getAllStandings = async () => {
  const urlStandingsPL =
    'https://api.football-data.org/v2/competitions/2021/standings';
  const urlStandingsPD =
    'https://api.football-data.org/v2/competitions/2014/standings';
  const urlStandingsBL1 =
    'https://api.football-data.org/v2/competitions/2002/standings';
  const urlStandingsSA =
    'https://api.football-data.org/v2/competitions/2019/standings';
  const urlStandingsFL1 =
    'https://api.football-data.org/v2/competitions/2015/standings';

  const allUrls = [
    urlStandingsPL,
    urlStandingsPD,
    urlStandingsBL1,
    urlStandingsSA,
    urlStandingsFL1,
  ];

  const getAllUrls = allUrls.map((url) => {
    const getStandings = axios.get(url, {
      headers: {
        'X-Auth-Token': process.env.REACT_APP_API_KEY,
      },
    });
    return getStandings;
  });

  return axios.all([...getAllUrls]).then(
    axios.spread((...allData) => {
      const allStandings = {
        standingsPL: allData[0].data.standings,
        standingsPD: allData[1].data.standings,
        standingsBL1: allData[2].data.standings,
        standingsSA: allData[3].data.standings,
        standingsFL1: allData[4].data.standings,
      };

      return allStandings;
    })
  );
};

export default getAllStandings;
