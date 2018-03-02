
export const PING = 'PING';
export const PONG = 'PONG';

export const ping = () => ({ type: PING });

export default function(state = { isPinging: false }, action) {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
};
