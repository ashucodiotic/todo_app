import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    loading: false,
    error: '',
    productList: [],
}
export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setProduct: (state, action) => {
            state.productList = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false
            state.productList = action.payload
            state.error = ''
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false
            state.productList = []
            state.error = action.error.message
        })
   
    }

})


export const fetchProduct = createAsyncThunk(
    'product/getAll', async () => {
        try {
            let res = await axios.get('https://dummyjson.com/products').then((res) => {
                return res.data.products
            })
                .catch((err) => {
                    showToast(err.message, "error")
                    return []
                })
            return res
        } catch (error) {

            showToast(error, "error")
        }

    }
)



export const {
    setProduct,

} = productSlice.actions

export default productSlice.reducer