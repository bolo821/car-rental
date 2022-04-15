import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

import Landing from "./pages/landing";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App;