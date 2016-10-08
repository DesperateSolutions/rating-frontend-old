/* global Materialize */
import { browserHistory } from 'react-router';

export function success(info) {
  Materialize.toast(info, 4000, 'green');
  browserHistory.push('/ranking');
}

export function error(info) {
  Materialize.toast(info, 4000, 'red');
}
