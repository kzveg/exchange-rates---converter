import { put, select, all, call } from "redux-saga/effects";

async function convertSum(from, to, amount) {
  const url = "https://api.exchangerate.host/convert?";
  const request = await fetch(
    url + "from=" + from + "&to=" + to + "&amount=" + amount
  );
  const data = await request.json();

  return data;
}

export function* convertSaga() {
  const [from, to, amount] = yield all([
    select((state) => state.from),
    select((state) => state.to),
    select((state) => state.amount),
  ]);
  if ([from, to, amount] !== "") {
    const getConvertSum = yield call(convertSum, from, to, amount);
    yield put({ type: "PUT_CONVERT_SUM", payload: getConvertSum.result });
  } else {
    yield put({ type: "PUT_CONVERT_SUM", payload: 0 });
  }
}
