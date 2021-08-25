import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { SagaWithoutAction } from '../../global/store';
import { auth } from '../../../firebase/firebase';
import { logoutUserSuccess } from '../auth.actions';

function* logoutSagaWorker(): SagaWithoutAction {
  try {
    yield call([auth, auth.signOut]);
    yield put(logoutUserSuccess());
  } catch (error) {
    toast.info(error.message);
  }
}

export default logoutSagaWorker;
