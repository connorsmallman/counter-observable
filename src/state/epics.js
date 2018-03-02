import { combineEpics } from 'redux-observable';
import { incrementEpic, decrementEpic } from './epics/counter';

export default combineEpics(incrementEpic, decrementEpic);