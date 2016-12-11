import { createStore } from 'redux';

const reducer = (state, action) => {
    switch(action.type){
        case 'CREATE':
            state.push(action.user);
            break;
        case 'UPDATE':
            for(var i = 0; i < state.length; i ++){
                if(state[i].id === action.user.id){
                    state[i] = action.user;
                }
                break;
            }
            break;
        case 'DELETE':
            state = state.filter((user) => {
                return user.id !== action.id
            });
            break;
        case 'GET':
            for(var i = 0; i < state.length; i ++){
                if(state[i].id === action.id) return state[i];
            }
            break;
        default:
            break;
    }
    return state;
}

let data = [{
    id: 2,
    fullname: 'Pham Van Ton',
    job: 'PHP Developer'
}];

const store = createStore(reducer, data);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: 'CREATE', 
    user: {
        id: 1,
        fullname: 'Vu Hai Dang',
        job: 'Fullstack Developer'
    }
})

store.dispatch({
    type: 'DELETE',
    id: 2
})

store.dispatch({
    type: 'UPDATE',
    user: {
        id: 2,
        fullname: 'Tran The Troll',
        job: 'CAVE'
    }
})

store.dispatch({
    type: 'GET',
    id: 2
})