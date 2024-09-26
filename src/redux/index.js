import { configureStore } from '@reduxjs/toolkit'


// Slices
import cartSlice from './cartSlice';
import userSlice from './userSlice';
import settingSlice from './settingSlice';

export default configureStore({
    reducer: {
        cartSlice,
        userSlice,
        settingSlice
    }
});