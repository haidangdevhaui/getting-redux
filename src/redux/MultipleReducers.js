import { combineReducers, createStore } from 'redux';

const userReducer  = (state = {}, action) => {
    switch(action.type){
        case 'CHANGE_AGE':
            state = {...state, age: action.payload}
            break;
        case 'CHANGE_NAME':
            state = {...state, name: action.payload}
            break;
        default:
            break;
    }
    return state;
}

const tweetsReducers = (state = [], action) => {
    return state;
}

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducers
})

const store = createStore(reducers);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: 'CHANGE_AGE', payload: 23})
store.dispatch({type: 'CHANGE_NAME', payload: 'Vu Hai Dang'})