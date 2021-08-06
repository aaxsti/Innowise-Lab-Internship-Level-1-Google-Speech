import {render} from 'react-dom';
import App from "./components/App/App";
import {Global} from "./Global.styled";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store, {saga} from "./redux/store";
import {authSagas} from "./redux/auth/auth.sagas";

saga.run(authSagas)

render(
    <BrowserRouter>
        <Provider store={store}>
            <Global/>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


