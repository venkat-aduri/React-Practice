//store
//reducer
//state
//initialState
//dispatch
//subscribe
//action
//payload

//import createStore function from redux
//createStore function used to create the store

const { createStore } = require("redux");

//initial state
const initialState = {
    bal : 10000
};

//reducer
//business logic called as reducer
//we must deploy reducer to store
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                ...state,
                bal : state.bal - action.value
            }
        case "DEPOSIT":
            return{
                ...state,
                bal : state.bal +  action.value
            }
    }
    return state;
    
};

const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({type:"WITHDRAW",value:2000});
store.dispatch({type:"DEPOSIT",value:5000});