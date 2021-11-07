import { Route, Switch, Redirect } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container ms-2'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/dc' component={DcScreen} />
                    <Route exact path='/search' component={SearchScreen} />
                    <Route exact path='/hero/:heroeid' component={HeroScreen} />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    );
};
