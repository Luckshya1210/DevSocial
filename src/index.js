import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {configureStore,applyMiddleware,compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers';
import App from './App';  
import { GoogleOAuthProvider } from '@react-oauth/google';

const store=createStore(reducers,compose(applyMiddleware(thunk)) )
ReactDOM.render(
    <GoogleOAuthProvider clientId='226240241671-3u02l0j9asomh53clffu2l4pujnfraol.apps.googleusercontent.com'>
    <Provider store={store}>
        <App/>
    </Provider>
    </GoogleOAuthProvider>,
    document.getElementById('root'))