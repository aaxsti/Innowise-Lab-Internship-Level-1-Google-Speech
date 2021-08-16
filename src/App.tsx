import { Redirect, Route, Switch } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import MainAppWrapper from './App.styled';
import StartPage from './pages/start/StartPage';
import LoginPage from './pages/auth/LoginPage/LoginPage';
import SignUpPage from './pages/auth/SignUpPage/SignUpPage';
import { appInitialize } from './core/redux/app/app.actions';
import MainPage from './pages/main/MainPage';
import Routes from './core/constants/routes';
import i18n from './core/i18next/i18next';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appInitialize());
  }, [dispatch]);

  const redirectStartPage = () => <Redirect to={Routes.Start} />;
  const renderStartPage = () => <StartPage />;
  const renderMainPage = () => <MainPage />;
  const renderLoginPage = () => <LoginPage />;
  const renderSignUpPage = () => <SignUpPage />;

  return (
    <I18nextProvider i18n={i18n}>
      <MainAppWrapper>
        <Switch>
          <Route exact path="/" render={redirectStartPage} />
          <Route path={Routes.Start} render={renderStartPage} />
          <Route path={Routes.Main} render={renderMainPage} />
          <Route path={Routes.LogIn} render={renderLoginPage} />
          <Route path={Routes.SignUp} render={renderSignUpPage} />
        </Switch>
      </MainAppWrapper>
    </I18nextProvider>
  );
};

export default App;