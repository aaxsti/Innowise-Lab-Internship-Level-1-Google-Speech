import {MainAppWrapper} from "./App.styled";
import StartPage from "../../pages/StartPage/StartPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import {Redirect, Route, Switch} from "react-router-dom";
import {FC} from "react";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";

const App: FC = () => {
    return (
        <MainAppWrapper>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/start'}/>}/>
                <Route path='/start' render={() => <StartPage/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>
                <Route path='/signup' render={() => <SignUpPage/>}/>
            </Switch>
        </MainAppWrapper>
    );
}

export default App;
