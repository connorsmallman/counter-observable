import { ping } from '../../state/modules/ping';

export function mapStateToProps(state) {
  return {
    isPinging: state.ping.isPinging
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    ping: () => dispatch(ping())
  }
}