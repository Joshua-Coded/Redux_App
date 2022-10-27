import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension";

//redux default state
var defaultState = 0;


//action types

const ADD_MONEY = "DEPOSIT";
const REMOVE_MONEY = "WITHDRAW";

//ACTION CREATORS
const deposit = (amount) => {
return{
    type: ADD_MONEY,
    payload: { amount: amount}
}
}

const withdraw = (amount) => {
return{ type: REMOVE_MONEY, 
    payload: { amount: amount}
}
}

//reducers function

const balanceReducer = (state=defaultState, action) => {

    switch(action.type)
    {
        case ADD_MONEY:
            return state + action.payload.amount;
        case REMOVE_MONEY:
            return state - action.payload.amount;
        default:
            return state;
    }
};

//redux store

const store = configureStore({reducer: balanceReducer}, composeWithDevTools);

//subscribing to store
store.subscribe(() => {
console.log(store.getState())
})

// dispatch action, a function used to supply an action to the store, so that the
store.dispatch(deposit(1000))

store.dispatch(deposit(20000))

store.dispatch(deposit(4000))

store.dispatch(deposit(8000))

store.dispatch(withdraw(1000))

store.dispatch(withdraw(2000))
store.dispatch(withdraw(5000))




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
         <App/>
    </React.StrictMode>
   
)

