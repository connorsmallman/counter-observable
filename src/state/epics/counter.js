import { INCREMENT, DECREMENT } from '../modules/counter';

export default function counterEpic (action$) {
  return action$.ofType(INCREMENT)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: DECREMENT });
}
  