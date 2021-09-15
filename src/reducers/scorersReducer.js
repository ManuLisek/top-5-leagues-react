export const initialStateScorers = {   
  scorersPL: [],
  scorersPD: [],
  scorersBL1: [],
  scorersSA: [],
  scorersFL1: [],
  areScorersLoading: true,
  haveScorersError: false,
};
  
export const scorersReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SCORERS_SUCCESS':
      return {
        scorersPL: action.payload.topScorersPL,
        scorersPD: action.payload.topScorersPD,
        scorersBL1: action.payload.topScorersBL1,
        scorersSA: action.payload.topScorersSA,
        scorersFL1: action.payload.topScorersFL1,
        areScorersLoading: false,
        haveScorersError: false,
      };
    case 'FETCH_SCORERS_ERROR':
      return {
        scorersPL: [],
        scorersPD: [],
        scorersBL1: [],
        scorersSA: [],
        scorersFL1: [],
        areScorersLoading: false,
        haveScorersError: true,
      };
    default:
      return state;
  }
};