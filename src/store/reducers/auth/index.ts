import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    isAuth: boolean;
}

const initialState: UserState = {
    isAuth: false,
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn(state, action: PayloadAction<boolean>) {
            state.isAuth = true
        },
        signOut(state, action: PayloadAction<boolean>) {
            state.isAuth = false
        }
    }
})