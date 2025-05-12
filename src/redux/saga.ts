import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { Country, countriesFailure, countriesRequest, countriesSuccess } from "./slice";
import { SagaIterator } from "redux-saga";



function* fetchCountriesSaga(): SagaIterator {
  try {
    const response = yield call(() => axios.get<Country[]>('https://restcountries.com/v3.1/all'));
    yield put(countriesSuccess(response.data));
  } catch (error: any) {
    yield put(countriesFailure(error.message))
  }
}

export default function* countriesSaga() {
  yield takeLatest(countriesRequest.type, fetchCountriesSaga)
}