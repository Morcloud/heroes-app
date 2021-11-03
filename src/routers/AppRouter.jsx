import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginSreen } from "../components/login/LoginSreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginSreen} />
                    <Route path='/' component={DashboardRoutes} />
                </Switch>
            </div>
        </Router>
    );
};
