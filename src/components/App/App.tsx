import {MainAppWrapper} from "./App.styled";
import StartPage from "../../pages/StartPage/StartPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import {Redirect, Route, Switch} from "react-router-dom";
import {FC, useEffect} from "react";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import {useDispatch} from "react-redux";
import {appInitialize} from "../../redux/app/app.actions";
import MainPage from "../../pages/MainPage/MainPage";

const App: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(appInitialize())
    }, [dispatch])

    return (
        <MainAppWrapper>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/start'}/>}/>
                <Route path='/start' render={() => <StartPage/>}/>
                <Route path='/main' render={() => <MainPage/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>
                <Route path='/signup' render={() => <SignUpPage/>}/>
            </Switch>
        </MainAppWrapper>
    );
}

export default App;
