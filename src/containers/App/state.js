import { increment, decrement } from '../../state/modules/counter';

export function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}