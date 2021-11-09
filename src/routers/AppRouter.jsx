import { useContext } from "react";
// import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HashRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginSreen } from "../components/login/LoginSreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path='/login'
                        component={LoginSreen}
                        isAuthenticated={user.logged}
                    />
                    <PrivateRoute
                        path='/'
                        component={DashboardRoutes}
                        isAuthenticated={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    );
};
