import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

import Landing from "./pages/landing";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <Provider store={store}>
            <ToastContainer pauseOnFocusLoss={false} autoClose={5000} hideProgressBar={false} closeOnClick />
            <Router>
                <Switch>
                    <Route path="/:clickid/:l1/:l2" exact component={Landing} />
                    <Redirect to="/123/ggle/ggle/" />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App;