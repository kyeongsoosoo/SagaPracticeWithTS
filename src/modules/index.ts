import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import { counter } from "./counterWithTSaction";
import github from "./github/reducer";
import { githubSaga } from "./github/saga";

const rootReducer = combineReducers({
  counter,
  github,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([githubSaga()]);
}
