import { Redirect, Route, Switch } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainAppWrapper from './App.styled';
import StartPage from '../../pages/StartPage/StartPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import { appInitialize } from '../../redux/app/app.actions';
import MainPage from '../../pages/MainPage/MainPage';
import { MainRoutes } from '../../types/enums/enums';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appInitialize());
  }, [dispatch]);

  return (
    <MainAppWrapper>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={MainRoutes.Start} />} />
        <Route path={MainRoutes.Start} render={() => <StartPage />} />
        <Route path={MainRoutes.Main} render={() => <MainPage />} />
        <Route path={MainRoutes.LogIn} render={() => <LoginPage />} />
        <Route path={MainRoutes.SignUp} render={() => <SignUpPage />} />
      </Switch>
    </MainAppWrapper>
  );
};

export default App;
