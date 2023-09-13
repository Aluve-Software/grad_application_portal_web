import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    current: null
}

const authenticationSlicer = createSlice({
    name: 'authentication',
    initialState: INITIAL_STATE,
    reducers: {
        login: (state, action) => {},
        register: (state, action) => {},
        forgot_password: (state, action) => {},
        login: (state, action) => {},
    }
})

export const AuthActions = authenticationSlicer.actions
export default authenticationSlicer.reducer