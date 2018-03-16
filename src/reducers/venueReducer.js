import * as ACTIONS from '../constants/actionTypes';
import initialState from './initialState';

export default function venueReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_VENUE_VIEWER:
      return {
        ...state,
        isVenueViewerOpen: !state.isVenueViewerOpen
      };
    case ACTIONS.FETCH_VENUES:
      return {
        ...state,
        isLoading: true
      };
    case ACTIONS.SELECT_VENUE:
      return {
        ...state,
        currentVenue: action.payload
      };
    case ACTIONS.RECIEVED_VENUES:
      return {
        ...state,
        venues: action.payload,
        isLoading: false
      };
    default:
      return state;
  }

}
