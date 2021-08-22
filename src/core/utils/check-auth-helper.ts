import firebase from 'firebase';
import { auth } from '../firebase/firebase';

const onAuthStateChanged = (): Promise<Error | firebase.User> => (
  new Promise<Error | firebase.User>((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error('You are not authorized!'));
      }
    });
  })
);

export default onAuthStateChanged;
