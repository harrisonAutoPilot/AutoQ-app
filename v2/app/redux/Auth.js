import { createSlice } from "@reduxjs/toolkit";
import { countryCodeList,login,register, getUser, updateUserPassword,forgotPin,getPhoneVerificationPin,verifyPin, checkEmailDetails, updateUserDetails,checkPhoneDetails, deleteUserAccount, updateUserImage,checkAddressDetails } from "@Request2/Auth";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: {},
        status: "idle",
        deleteAccount: "idle",
        errors: {},
        reset:"idle",
        pin: "idle",
        isLoading: "idle",
        update:  "idle",

          // Login
      loginStatus: "idle",

       // CheckPhoneDetails
    checkPhoneStatus: "idle",

    // CheckDetEmailails
    checkEmailStatus: "idle",

    userStatus: "idle",
    userVerified: false,

    // checkAddressDetails
    checkAddressStatus: "idle",

    // Signup
    registerStatus: "idle",

    // User Agent
    userAgent: {},
    userAgentStatus: "idle",
      
 

     // Phone Verification
     phoneVerificationPin: "idle",

     // Verify Phone Pin
     phoneNumberVerfiedStatus: "idle",
     phoneNumberVerfied: false,

    // Country Code
    countryCodeStatus: "idle",
    countryCodeData: [],
    loggedIn: false

        


    },
    reducers:{
        cleanup: (state) => {
            state.errors = {}
            state.status = "idle"
            state.update = "idle"
            state.deleteAccount ="idle"
        },
        cleanLoginStatus: (state) => {
            state.errors = {}
            state.loginStatus = "idle"
        },
        cleanRegisterStatus: (state) => {
            state.errors = {}
            state.registerStatus = "idle"
        },
        cleanCheckAddress: (state) => {
            state.checkAddressStatus = "idle"
            state.errors = {}
        },

        cleanCheckPhone: (state) => {
            state.checkPhoneStatus = "idle"
            state.errors = {}
        },

        cleanCheckEmail: (state) => {
            state.checkEmailStatus = "idle"
            state.errors = {}
        },
        cleanCountryCodeStatus: (state) => {
            state.errors = {}
            state.countryCodeStatus = "idle"
        },
        getUserDetails: (state, { payload }) => {
            state.user = { ...state.user, ...payload }
        },
        cleanUserDetails: (state) => {
            state.user = {}
            state.errors = {}
            state.update = "idle"
        },
        cleanPhoneVerificationStatus: (state) => {
            state.errors = {}
            state.phoneVerificationPin = "idle"
        },
     
        logout(state) {
            state.status = "idle"
            state.isAuthenticated = false
            state.user = {}
            state.errors = {}
            state.pin = "idle"
            state.deleteAccount = "idle"
            state.loggedIn = false
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.loginStatus = "pending";
                state.errors = {};
                state.user = {};
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                console.log("it got here success")
                state.isAuthenticated = true;
                state.errors = {};
                console.log("the action", payload)
            })
            .addCase(login.rejected, (state, { payload }) => {
             
                state.loginStatus = "failed";
                console.log("the action check here", payload)
                state.errors = payload;
                state.isAuthenticated = false
                console.log("it got here failed", state.errors)
            })

   


        builder
            .addCase(getUser.pending, state => {
                state.status = "pending",
                state.errors = {},
                state.user = {};
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.user = payload;
                state.errors = {};
                state.loggedIn = true
            })
            .addCase(getUser.rejected, (state, { payload }) => {
                state.status = "failed";
                state.errors = payload;
                state.isAuthenticated = false
                state.user = {};
            })

        builder
            .addCase(updateUserPassword.pending, state => {
                state.update = "pending";
                state.errors = {};
            })
            .addCase(updateUserPassword.fulfilled, (state) => {
                state.update = "success";
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
            .addCase(register.pending, state => {
                state.registerStatus = "pending";
                state.errors = {};
                state.user = {};
                state.isAuthenticated = false;
                state.userVerified = false;

            })
            .addCase(register.fulfilled, (state, action) => {
                state.registerStatus = "success";
                state.isAuthenticated = true;
                state.userVerified = action?.payload?.user.user_verified;
                // state.signedIn = true;
            })
            .addCase(register.rejected, (state, { payload }) => {
                state.registerStatus = "failed";
                state.errors = payload;
            })

            // builder
            // .addCase(updateUserDetails.pending, state => {
            //     state.update = "pending";
            //     state.errors = {};
            // })
            // .addCase(updateUserDetails.fulfilled, (state, {payload}) => {
            //     state.update = "success";
            //     state.errors = {};
            // })
            // .addCase(updateUserDetails.rejected, (state, { payload }) => {
            //     state.update = "failed";
            //     state.errors = payload;
            // })

            builder
            .addCase(deleteUserAccount.pending, state => {
                state.deleteAccount = "pending";
                state.errors = {};
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
            })
            .addCase(updateUserImage.fulfilled, (state, {payload}) => {
                
                state.update = "success";
                state.errors = {};
            })
            .addCase(updateUserImage.rejected, (state, { payload }) => { 
                state.update = "failed";
                state.errors = payload;
            })


     

            builder
            .addCase(countryCodeList.pending, state => {
                state.countryCodeStatus = "pending";
                state.countryCodeData = [];
                state.errors = {};
            })
            .addCase(countryCodeList.fulfilled, (state, { payload }) => {
                state.countryCodeStatus = "success";
                state.countryCodeData = payload;
            })
            .addCase(countryCodeList.rejected, (state, { payload }) => {
                state.countryCodeStatus = "failed";
                state.errors = payload;
            })


        builder
        .addCase(checkPhoneDetails.pending, state => {
            state.checkPhoneStatus = "pending";
            state.errors = {};
        })
        .addCase(checkPhoneDetails.fulfilled, (state) => {
            state.checkPhoneStatus = "success";
        })
        .addCase(checkPhoneDetails.rejected, (state, { payload }) => {
            state.checkPhoneStatus = "failed";
            state.errors = payload;
        })


        builder
            .addCase(checkEmailDetails.pending, state => {
                state.checkEmailStatus = "pending";
                state.errors = {};
            })
            .addCase(checkEmailDetails.fulfilled, (state) => {
                state.checkEmailStatus = "success";
            })
            .addCase(checkEmailDetails.rejected, (state, { payload }) => {
                state.checkEmailStatus = "failed";
                state.errors = payload;
            })

            builder
            .addCase(getPhoneVerificationPin.pending, state => {
                state.phoneVerificationPin = "pending";
                state.errors = {};
            })
     
            .addCase(getPhoneVerificationPin.fulfilled, (state, { payload }) => {   
                state.phoneVerificationPin = "success";
                console.log("to get the response", payload)
            })
            .addCase(getPhoneVerificationPin.rejected, (state, { payload }) => {
                state.phoneVerificationPin = "failed";
                state.errors = payload;
            })

            builder
            .addCase(verifyPin.pending, state => {
                state.errors = {};
                state.phoneNumberVerfiedStatus = "pending"
                state.phoneNumberVerfied = false
            })
            .addCase(verifyPin.fulfilled, (state) => {
                state.phoneNumberVerfiedStatus = "success"
                state.phoneNumberVerfied = true
            })
            .addCase(verifyPin.rejected, (state, { payload }) => {
                state.errors = payload;
                state.phoneNumberVerfiedStatus = "failed"
            })
            builder
            .addCase(checkAddressDetails.pending, state => {
                state.checkAddressStatus = "pending";
                state.errors = {};
            })
            .addCase(checkAddressDetails.fulfilled, (state) => {
                state.checkAddressStatus = "success";
            })
            .addCase(checkAddressDetails.rejected, (state, { payload }) => {
                state.checkAddressStatus = "failed";
                state.errors = payload;
            })

            
    }
});

export const { logout,cleanCountryCodeStatus,getUserDetails,cleanCheckAddress,cleanRegisterStatus, cleanCheckEmail,cleanPhoneVerificationStatus, cleanUserDetails,cleanCheckPhone, cleanLoginStatus, cleanup,cleanDisableAc } = authSlice.actions

export default authSlice.reducer;