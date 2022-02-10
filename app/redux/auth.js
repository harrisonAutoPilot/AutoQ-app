import { createSlice } from "@reduxjs/toolkit";
import { login, getUser, register, getPhoneVerificationPin, activateAccount, forgotPin, verifyPin, updateUserDetails, updateUserPassword } from "@Request/auth";

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
                state.isAuthenticated = true;
                state.errors = {};
                state.signedIn = true
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

            builder
            .addCase(getPhoneVerificationPin.pending, state => {
                state.pin = "pending";
                state.errors = {};
            })
            .addCase(getPhoneVerificationPin.fulfilled, (state) => {
                state.pin = "success";
                state.errors = {};
            })
            .addCase(getPhoneVerificationPin.rejected, (state, { payload }) => {
                state.pin = "failed";
                state.errors = payload;
            })

            builder
            .addCase(verifyPin.pending, state => {
                state.status = "pending";
                state.pin = "idle";
                state.errors = {};
            })
            .addCase(verifyPin.fulfilled, (state) => {
                state.status = "success";
                state.errors = {};
            })
            .addCase(verifyPin.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
            })

            builder
            .addCase(activateAccount.pending, state => {
                state.status = "pending";
                state.errors = {};
            })
            .addCase(activateAccount.fulfilled, (state) => {
                state.status = "success";
                state.errors = {};
            })
            .addCase(activateAccount.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
            })

            builder
            .addCase(updateUserDetails.pending, state => {
                state.update = "pending";
                state.errors = {};
                state.signedIn = false
            })
            .addCase(updateUserDetails.fulfilled, (state) => {
                state.update = "success";
                state.errors = {};
            })
            .addCase(updateUserDetails.rejected, (state, { payload }) => {
                console.log("hi")
                state.update = "failed";
                state.errors = payload;
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
    }
});

export const { logout, cleanup } = authSlice.actions

export default authSlice.reducer;