import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider,
} from 'react-redux'
import configureStore from './store'
import './index.less';
import Root from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();


