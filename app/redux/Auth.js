import { createSlice } from "@reduxjs/toolkit";
import { login, getUser, updateUserPassword,forgotPin, updateUserDetails,deleteUserAccount, updateUserImage} from "@Request/Auth";
// import { forgotPin } from "../httpRequests/Auth";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: {},
        status: "idle",
        deleteAccount: "idle",
        errors: {},
        signedIn: false,
        signedInData: null,
        userVerified: false,
        reset:"idle",
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
            state.deleteAccount ="idle"
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
            state.deleteAccount = "idle",
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
                state.isAuthenticated = true;
                state.errors = {};
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.isAuthenticated = false
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

        builder
            .addCase(updateUserPassword.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(updateUserPassword.fulfilled, (state) => {
                state.update = "success";
                state.errors = {};
            })
            .addCase(updateUserPassword.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
            })

        builder
            .addCase(forgotPin.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(forgotPin.fulfilled, (state) => {
                state.update = "success";
                state.errors = {};
            })
            .addCase(forgotPin.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
            })

            builder
            .addCase(updateUserDetails.pending, state => {
                state.update = "pending";
                state.errors = {};
                state.signedIn = false
            })
            .addCase(updateUserDetails.fulfilled, (state, {payload}) => {
                state.update = "success";
                state.errors = {};
            })
            .addCase(updateUserDetails.rejected, (state, { payload }) => {
                state.update = "failed";
                state.errors = payload;
            })

            builder
            .addCase(deleteUserAccount.pending, state => {
                state.deleteAccount = "pending";
                state.errors = {};
                state.signedIn = false
            })
            .addCase(deleteUserAccount.fulfilled, (state, {payload}) => {
                state.deleteAccount = "success";
                state.errors = {};
            })
            .addCase(deleteUserAccount.rejected, (state, { payload }) => {
                state.deleteAccount = "failed";
                state.errors = payload;
            })

            builder
            .addCase(updateUserImage.pending, state => {
                state.update = "pending";
                state.errors = {};
                state.signedIn = false
            })
            .addCase(updateUserImage.fulfilled, (state, {payload}) => {
                state.update = "success";
                state.errors = {};
            })
            .addCase(updateUserImage.rejected, (state, { payload }) => {

                state.update = "failed";
                state.errors = payload;
            })
            
    }
});

export const { logout, cleanup } = authSlice.actions

export default authSlice.reducer;