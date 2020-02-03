import { RECIVE_TWEETS } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };
    default:
      return state;
  }
}
