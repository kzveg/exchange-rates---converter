import { put, select } from "redux-saga/effects";

async function getExhangeRates(base) {
  const url = "https://api.exchangerate.host/latest";
  const request = await fetch(url + "?base=" + base);
  const data = await request.json();
  return data;
}

export function* exhangeRatesSaga() {
  const base = yield select((state) => state.base);
  const data = yield getExhangeRates(base);
  yield put({ type: "GET_DATA", payload: data });
}
