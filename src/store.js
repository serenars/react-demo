import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux'

// import {
//     // persistStore,
//     autoRehydrate,
// } from 'redux-persist'

import rootReducer from './reducer.js'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default function configureStore(onCompletion) {

    let enhancer

    // if(conf.env === PRO) {
    //     enhancer = compose(
    //         applyMiddleware(thunk),
    //         autoRehydrate()
    //     )
    // } else {
        enhancer = compose(
            // applyMiddleware(thunk),
            applyMiddleware(thunk, logger),
            // autoRehydrate()
        )
    // }

    // if(module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('./reducer.js', () => {
    //         const nextReducer = require('./reducer.js').default
    //         store.replaceReducer(nextReducer)
    //     })
    // }

    const store = createStore(rootReducer, enhancer)


    // return store
    return store
}
