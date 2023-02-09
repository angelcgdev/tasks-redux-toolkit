import { createSlice} from '@reduxjs/toolkit'

type UiState = { addIsOpen: boolean }
const initialState:UiState = {addIsOpen: false};
export const UiSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        handleOpenDialogAdd: (state)=> {
            state.addIsOpen = !state.addIsOpen;
        },
    }
})


export const { handleOpenDialogAdd } = UiSlice.actions
export default UiSlice.reducer