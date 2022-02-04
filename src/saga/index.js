import { takeEvery } from "redux-saga/effects";
import { convertSaga } from "./convertSaga";
import { exhangeRatesSaga } from "./exhangeRatesSaga";

export function* watchClickSaga() {
  yield takeEvery(["GET_FIRST_DATA", "CHANGE_RATES"], exhangeRatesSaga);
  yield takeEvery(
    ["CONVERT_FROM", "CHANGE_AMOUNT", "CONVERT_TO", "AMOUNT"],
    convertSaga
  );
}

export default function* rootSaga() {
  yield watchClickSaga();
}
