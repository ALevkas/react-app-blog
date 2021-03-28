import { Route, Switch } from 'react-router-dom';

import { Auth } from '../Auth/Auth';
import { Home } from '../Home/Home';

export const Main = () => {
    return (
        <>
            <main className='container content'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/auth' component={Auth} />
                </Switch>
            </main>
        </>
    );
};
