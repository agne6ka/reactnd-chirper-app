import { getInitialData } from "../utils/api";
import { reciveUsers } from "./users";
import { reciveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(reciveUsers(users));
      dispatch(reciveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
