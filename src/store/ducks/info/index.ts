import { createAction, createReducer } from "@reduxjs/toolkit";

export interface IInfoReducerData {
    routeName: string;
}

const INITIAL_STATE: IInfoReducerData = {
    routeName: '',
}

export const changeRouteName = createAction<IInfoReducerData>("ROUTE_NAME");

export default createReducer(INITIAL_STATE, {
    [changeRouteName.type]: (state, action) => ({...state, routeName: action.payload})
});