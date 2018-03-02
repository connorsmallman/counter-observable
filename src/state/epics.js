import { combineEpics } from 'redux-observable';
import counterEpic from './epics/counter';

export default combineEpics(counterEpic);