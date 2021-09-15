export const initialStateHighlights = {   
  highlights: [],
  areHighlightsLoading: true,
  haveHighlightsError: false,
};
  
export const highlightsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_HIGHLIGHTS_SUCCESS':
      return {
        highlights: action.payload,
        areHighlightsLoading: false,
        haveHighlightsError: false,
      };
    case 'FETCH_HIGHLIGHTS_ERROR':
      return {
        highlights: [],
        areHighlightsLoading: false,
        haveHighlightsError: true,
      };
    default:
      return state;
  }
};