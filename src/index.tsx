import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { Global } from './Global.styled';
import store, { saga } from './redux/store';
import authSagas from './redux/auth/auth.sagas';
import wordsSagas from './redux/words/words.sagas';

saga.run(authSagas);
saga.run(wordsSagas);

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </BrowserRouter>
);

render(app, document.getElementById('root'));
