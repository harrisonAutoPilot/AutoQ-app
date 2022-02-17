import { createSlice } from "@reduxjs/toolkit";
import { login, getUser, register} from "@Request/Auth";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: {},
        status: "idle",
        errors: {},
        signedIn: false,
        signedInData: null,
        userVerified: false,
        pin: "idle",
        isLoading: "idle",
        update:  "idle",
        userStatus: "idle",
    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle",
            state.update = "idle"
        },
        logout(state) {
            state.status = "idle",
            state.isAuthenticated = false,
            state.user = {},
            state.signedIn = false,
            state.signedInData = null,
            state.errors = {},
            state.userVerified = false,
            state.pin = "idle",
            state.userStatus = "idle"
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.user = {};
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log(action)
                state.isAuthenticated = true;
                state.errors = {};
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.isAuthenticated = false
            })

        builder
            .addCase(register.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.user = {};
                state.userVerified = false
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.status = "success";
                state.errors = {};
                state.userVerified = action?.payload?.user.user_verified,
                state.signedIn = true
            })
            .addCase(register.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.isAuthenticated = false;
                state.userVerified = false
            })

        builder
            .addCase(getUser.pending, state => {
                state.status = "pending",
                state.errors = {},
                state.user = {};
                state.userVerified = false,
                state.userStatus =  "pending";
                signedIn = true
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.user = payload;
                state.errors = {};
                state.userVerified = payload?.user_verified;
                state.userStatus =  "success";
                state.signedIn = true
            })
            .addCase(getUser.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.user = {};
                state.userVerified = false,
                state.userStatus =  "failed";
                signedIn = true
            })

            
    }
});

export const { logout, cleanup } = authSlice.actions

export default authSlice.reducer;