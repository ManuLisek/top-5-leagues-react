export const initialStateStandings = {
  standingsPL: [],
  standingsPD: [],
  standingsBL1: [],
  standingsSA: [],
  standingsFL1: [],     
};
  
export const standingsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_STANDINGS':
      return {
        standingsPL: action.payload.standingsPL[0].table,               
        standingsPD: action.payload.standingsPD[0].table,
        standingsBL1: action.payload.standingsBL1[0].table,
        standingsSA: action.payload.standingsSA[0].table,
        standingsFL1: action.payload.standingsFL1[0].table,
      };
    default:
      return state;
  }
};