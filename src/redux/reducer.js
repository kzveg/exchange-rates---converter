import {
  GET_DATA,
  CHANGE_RATES,
  CONVERT_FROM,
  CONVERT_TO,
  AMOUNT,
  PUT_CONVERT_SUM,
} from "./actions";

const initialState = {
  base: "UAH",
  items: [],
  from: null,
  to: null,
  amount: 0,
  convertRezult: " ",
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      const data = action.payload;
      return {
        ...state,
        items: data,
      };
    case CHANGE_RATES:
      return {
        ...state,
        base: action.payload,
      };
    case CONVERT_FROM:
      return {
        ...state,
        from: action.payload,
      };
    case CONVERT_TO:
      return {
        ...state,
        to: action.payload,
      };
    case AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    case PUT_CONVERT_SUM:
      return {
        ...state,
        convertRezult: action.payload,
      };
    default:
      return state;
  }
};
