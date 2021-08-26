import { call, put } from 'redux-saga/effects';
import { hideLoader, showLoader } from '../core/redux/app/app.actions';
import getAuthUserDataSagaWorker from '../core/redux/auth/sagas/getAuthUserDataSaga';
import onAuthStateChanged from '../core/utils/check-auth-helper';
import { authIsFailed } from '../core/redux/auth/auth.actions';

describe('getAuthUserDataSaga', () => {
  it('error handling triggers, success error action', () => {
    const generator = getAuthUserDataSagaWorker();

    expect(generator.next().value)
      .toEqual(put(showLoader()));

    expect(generator.next().value)
      .toEqual(call(onAuthStateChanged));

    expect(generator.next().value)
      .toEqual(put(hideLoader()));

    expect(generator.next().value)
      .toEqual(put(authIsFailed('Cannot read property \'uid\' of undefined')));

    expect(generator.next().value)
      .toEqual(put(hideLoader()));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });
});
