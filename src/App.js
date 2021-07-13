import React from 'react'
import Home from "./pages/Home";
import ScrollToTop from './ScrollToTop';
import ProductList from './pages/ProductList'
import SingleProduct from './pages/SingleProduct'


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
                <Route path={PRODUCT_LIST} component={ProductList}/>
                <Route path={SINGLE_LIST} component={SingleProduct}/>
                <Route path={HOMEPAGE} component={Home}/>
            </Switch>
        </Router>
    )
}

export default App;