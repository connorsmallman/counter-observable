import { INCREMENT, DECREMENT } from '../modules/counter';

export function incrementEpic(action$) {
  return action$.ofType(INCREMENT)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: DECREMENT });
}

export function decrementEpic(action$) {
  return action$.ofType(DECREMENT)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: INCREMENT });
}