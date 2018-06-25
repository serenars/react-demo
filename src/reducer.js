import {combineReducers} from 'redux'

import Home from './module/reducer.js'

const app_reducer = combineReducers({
    Home,
})

const rootReducer = (state, action) => {

    // 重置store
    // if (action.type === AUTH_SIGNOUT) {
    //     state = undefined
    // }

    return app_reducer(state, action)
}

export default rootReducer
