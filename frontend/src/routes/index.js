import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import Landing from "../pages/landing";
import Landing1 from '../pages/landing1';
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
                <Route exact path="/" component={Landing1} />
                <Route exact path="/new" component={Landing} />
                <Route exact path="/new/:param" component={Landing1} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/terms" component={Terms} />
                <Route path="/:param" component={Landing} />
                <Redirect to={`/`} />
            </Switch>
            <Footer />
        </>
    )
}

export default Routes;