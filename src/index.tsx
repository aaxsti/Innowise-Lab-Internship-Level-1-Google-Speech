import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Global from './Global.styled';
import store from './core/redux/global/store';
import HotjarReadyApp from './HotjarReadyApp';

const app = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <Global />
      <HotjarReadyApp />
    </Provider>
  </BrowserRouter>
);

render(app, document.getElementById('root'));
