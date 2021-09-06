export const initialStateScorers = {   
  scorersPL: [],
  scorersPD: [],
  scorersBL1: [],
  scorersSA: [],
  scorersFL1: [],
};
  
export const scorersReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SCORERS':
      return {
        scorersPL: action.payload.topScorersPL,
        scorersPD: action.payload.topScorersPD,
        scorersBL1: action.payload.topScorersBL1,
        scorersSA: action.payload.topScorersSA,
        scorersFL1: action.payload.topScorersFL1,
      };
    default:
      return state;
  }
};