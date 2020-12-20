//store : store is the container, helps to accomidate the reducer
//reducer : business logic is called as reducer
//state : reducer output calle as state
//initialState : default value of state
//dispatch : requesting called as dispatch
//subscribe : receiving the response called as subscribe
//action : reducer input called as action

//import createStore
//createStore, used to create the store

const {createStore} = require("redux");

const initialState = {
    age : 20
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "AGE_UP":
            return{
                ...state,
                age : state.age + action.value
            }
        case "AGE_DOWN":
            return{
                ...state,
                age : state.age - action.value
            }
    }

    return state;

};

const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({type:"AGE_UP",value:1});
store.dispatch({type:"AGE_DOWN",value:2});
store.dispatch({type:"AGE_UP",value:1});
store.dispatch({type:"AGE_UP",value:1});
store.dispatch({type:"AGE_DOWN",value:2});
store.dispatch({type:"AGE_UP",value:1});
store.dispatch({type:"AGE_UP",value:1});
store.dispatch({type:"AGE_DOWN",value:2});