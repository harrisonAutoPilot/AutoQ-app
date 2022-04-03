import { createSlice} from "@reduxjs/toolkit";
import { productRequest} from "@Request/ProductRequest"

export const productRequestSlice = createSlice({
    name: "product_request",
    initialState: {
        request: [],
        status: "idle",
        errors: {},
    },
    reducers:{
        cleanup: (state) => {
            state.status = "idle";
            state.errors = {};
            state.request = [];
        },
        
    },
    extraReducers: builder => {
        builder
            .addCase(productRequest.pending, state => {
                state.status = "pending";
                state.errors = {};
                state.request = [];
            })
            .addCase(productRequest.fulfilled, (state, action) => {
                state.request = action.payload;
                state.status = "success";
                state.errors = {};
            })
            .addCase(productRequest.rejected, (state, { payload }) => {
                console.log(payload)
                state.status = "failed";
                state.errors = payload;
                state.request = [];
            })

           
    }
});

export const { cleanup } = productRequestSlice.actions

export default productRequestSlice.reducer;