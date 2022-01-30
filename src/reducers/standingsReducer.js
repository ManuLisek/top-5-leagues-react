export const initialStateStandings = {
  standingsPL: [],
  standingsPD: [],
  standingsBL1: [],
  standingsSA: [],
  standingsFL1: [],
  areStandingsLoading: true,
  haveStandingsError: false,
};

export const standingsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_STANDINGS_SUCCESS':
      return {
        standingsPL: action.payload.standingsPL[0].table,
        standingsPD: action.payload.standingsPD[0].table,
        standingsBL1: action.payload.standingsBL1[0].table,
        standingsSA: action.payload.standingsSA[0].table,
        standingsFL1: action.payload.standingsFL1[0].table,
        areStandingsLoading: false,
        haveStandingsError: false,
      };
    case 'FETCH_STANDINGS_ERROR':
      return {
        standingsPL: [],
        standingsPD: [],
        standingsBL1: [],
        standingsSA: [],
        standingsFL1: [],
        areStandingsLoading: false,
        haveStandingsError: true,
      };
    default:
      return state;
  }
};
