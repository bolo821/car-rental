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
                <Route path="/landing/:param" component={Landing} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/privacy" component={Privacy} />
                <Route path="/terms" component={Terms} />
                <Redirect to={`/landing/clickid=123&l1=kay&l2=ggle&keyword=keyword`} />
            </Switch>
            <Footer />
        </>
    )
}

export default Routes;