import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Global from './Global.styled';
import store, { saga } from './core/redux/global/store';
import authSagasWatcher from './core/redux/auth/sagas/sagasCombiner';
import wordsSagasWatcher from './core/redux/words/sagas/sagasCombiner';

saga.run(authSagasWatcher);
saga.run(wordsSagasWatcher);

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </BrowserRouter>
);

render(app, document.getElementById('root'));
