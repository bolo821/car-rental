import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Landing from "./pages/Landing";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default App;