import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Components/Layout/Header';
import { Main } from './Components/Layout/Main';

function App() {
    return (
        <>
            <Router basename='react-app-blog'>
                <Header />
                <Main />
            </Router>
        </>
    );
}

export default App;
