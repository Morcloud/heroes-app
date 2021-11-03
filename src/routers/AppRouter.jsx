import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginSreen } from "../components/login/LoginSreen";
import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/login' component={LoginSreen} />
                    <Route exact path='/' component={MarvelScreen} />
                </Switch>
            </div>
        </Router>
    );
};
