import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <Provider store={store}>
            <ToastContainer pauseOnFocusLoss={false} autoClose={5000} hideProgressBar={false} closeOnClick />
            <Router>
                <Routes />
            </Router>
        </Provider>
    )
}

export default App;