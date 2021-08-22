import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { SagaWithoutAction } from '../../global/store';
import { auth } from '../../../firebase/firebase';
import { AuthActionTypes } from '../auth.action-types';

function* logoutSagaWorker(): SagaWithoutAction {
  try {
    yield call([auth, auth.signOut]);
    yield put({ type: AuthActionTypes.LOGOUT_SUCCESS });
  } catch (error) {
    toast.info(error.message);
  }
}

export default logoutSagaWorker;
