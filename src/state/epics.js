import { combineEpics } from 'redux-observable';
import pingEpic from './epics/ping';

export default combineEpics(pingEpic);