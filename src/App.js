import React from 'react'
import Home from "./pages/Home";
import ItemList from "./pages/ItemList";
import LinkItem from "./pages/LinkItem";
import ScrollToTop from './ScrollToTop';


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { HOMEPAGE } from "./routes";
import { PRODUCT_LIST } from "./routes";
import { SINGLE_LIST } from "./routes";

const App = () => {
    
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path={PRODUCT_LIST} component={ItemList}/>
                <Route path={SINGLE_LIST} component={LinkItem}/>
                <Route path={HOMEPAGE} component={Home}/>
            </Switch>
        </Router>
    )
}

export default App;