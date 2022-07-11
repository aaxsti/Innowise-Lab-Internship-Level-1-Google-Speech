import { Redirect, Route, Switch } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import StartPage from './pages/start/StartPage';
import LoginPage from './pages/auth/LoginPage/LoginPage';
import SignUpPage from './pages/auth/SignUpPage/SignUpPage';
import StatisticsPage from './pages/statistics/StatisticsPage';
import { appInitialize } from './core/redux/app/app.actions';
import MainPage from './pages/main/MainPage';
import Routes from './core/constants/routes';
import i18n from './core/i18next/i18next';
import 'react-toastify/dist/ReactToastify.css';
import PageWrapper from './core/components/styled/PageWrapper.styled';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appInitialize());
  }, [dispatch]);

  const redirectStartPage = () => <Redirect to={Routes.Start} />;
  const renderStartPage = () => <StartPage />;
  const renderMainPage = () => <MainPage />;
  const renderStatisticsPage = () => <StatisticsPage />;
  const renderLoginPage = () => <LoginPage />;
  const renderSignUpPage = () => <SignUpPage />;

  return (
    <I18nextProvider i18n={i18n}>
      <PageWrapper>
        <Switch>
          <Route exact path="/" render={redirectStartPage} />
          <Route path={Routes.Start} render={renderStartPage} />
          <Route path={Routes.LogIn} render={renderLoginPage} />
          <Route path={Routes.SignUp} render={renderSignUpPage} />
          <Route path={Routes.Main} render={renderMainPage} />
          <Route path={Routes.Statistics} render={renderStatisticsPage} />
        </Switch>
      </PageWrapper>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </I18nextProvider>
  );
};

export default App;
