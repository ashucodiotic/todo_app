import { configureStore} from '@reduxjs/toolkit'
import { authSlice } from './slices/AuthSlice'
import { productSlice } from './slices/ProductSlice'

export const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        product:productSlice.reducer,
    },
})

