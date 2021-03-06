import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Header from '../components/header';
import Home from '../containers/Home/index';
import Login from '../containers/Login/index';
import { useAuth } from '../hooks/useAuth';


const Routes = () => {
    const { user, signout, login } = useAuth();

    return (
        <Router>
            <Header signout={signout} user={user} />
            <Switch>
                <Route path='/login'>
                    <Login login={login} signout={signout} />
                </Route>
                <PrivateRoute user={user} path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes;