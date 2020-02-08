import { getInitialData } from "../utils/api";
import { reciveUsers } from "./users";
import { reciveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(reciveUsers(users));
      dispatch(reciveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
