import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Error from "./pages/Error";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/favourite' component={Favourite}/>
                <Route path='*' component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
