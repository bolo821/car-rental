import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import Landing from "../pages/landing";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

import Navbar from '../layout/navbar';
import Footer from '../layout/footer';

const Routes = () => {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [ history.location.pathname ]);

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/terms" component={Terms} />
                <Route path="/:param" component={Landing} />
                <Redirect to={`/clickid=123&l1=kay&l2=ggle&keyword=keyword`} />
            </Switch>
            <Footer />
        </>
    )
}

export default Routes;