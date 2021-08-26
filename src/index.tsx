import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Global from './Global.styled';
import store from './core/redux/global/store';

const app = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </BrowserRouter>
);

render(app, document.getElementById('root'));
