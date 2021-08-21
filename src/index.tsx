import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Global from './Global.styled';
import store, { saga } from './core/redux/global/store';
import authSagasWatcher from './core/redux/auth/sagas/sagasCombiner';
import wordsSagasWatcher from './core/redux/words/sagas/sagasCombiner';
import statisticsSagasWatcher from './core/redux/statistics/sagas/sagasCombiner';

saga.run(authSagasWatcher);
saga.run(wordsSagasWatcher);
saga.run(statisticsSagasWatcher);

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </BrowserRouter>
);

render(app, document.getElementById('root'));
