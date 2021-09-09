export const initialStateHighlights = {   
  highlights: [],
};
  
export const highlightsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_HIGHLIGHTS':
      return {
        highlights: action.payload,
      };
    default:
      return state;
  }
};