// import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "../redux/reducer";
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(dataReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
