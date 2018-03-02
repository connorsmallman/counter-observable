import { PING, PONG } from '../modules/ping';

export default function (action$) {
  console.log(action$);
  return action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });
}
  