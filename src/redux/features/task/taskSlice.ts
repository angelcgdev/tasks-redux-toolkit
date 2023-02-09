import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { iTask } from '../../../presentation/components/Task/models/task.model';

const initialState = iTask.empty();

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        push: (state, action:PayloadAction<iTask>)=> {
            return state = action.payload;
        },
        clean: (state)=> {
            return state = initialState;
        }
    }
});


export const { push, clean } = taskSlice.actions
export default taskSlice.reducer