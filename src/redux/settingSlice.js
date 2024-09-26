import { createSlice } from "@reduxjs/toolkit";


const settingSlice = createSlice({
    name: 'settingSlice',
    initialState: {
        showModal: null
    },
    reducers: {
        rdx_set_show_modal: (state, { payload }) => {
            state.showModal = payload
        }
    }
})

export default settingSlice.reducer;

export const { rdx_set_show_modal } = settingSlice.actions;