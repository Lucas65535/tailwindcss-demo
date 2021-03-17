import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import { Switch, Route } from 'react-router-dom';

export default function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/about' exact component={About}></Route>
                <Route path='/Menu' exact component={Menu}></Route>
            </Switch>
            <Footer />
        </>
    );
}