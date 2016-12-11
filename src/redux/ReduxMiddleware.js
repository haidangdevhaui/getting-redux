import { applyMiddleware, createStore } from 'redux';

const reducer = (state, action) => {
    return state;
}

const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

const middleware = applyMiddleware(logger);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
    console.log('store changed', store.getState());
})

store.dispatch({type: 'TEST'})