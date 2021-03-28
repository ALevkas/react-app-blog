import { Route, Switch } from 'react-router-dom';

import { Auth } from '../Auth/Auth';
import { Login } from '../Auth/Login';
import { Home } from '../Home/Home';

export const Main = () => {
    return (
        <>
            <main className='container content'>
                <Switch>
                    <Route exact path='/' component={Auth} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/home' component={Home} />
                </Switch>
            </main>
        </>
    );
};
