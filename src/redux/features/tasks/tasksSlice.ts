import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { iTask } from '../../../presentation/components/Task/models/task.model';

const initialState: iTask[] = [];

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action:PayloadAction<iTask>)=> {
            state.push(action.payload);
        },
        update: (state, {payload}:PayloadAction<iTask>)=> {
            state.map(task=>task.id===payload.id?payload:task);
        },
        remove: (state, {payload}:PayloadAction<iTask>)=> {
            return state.filter(task => task.id!==payload.id)
        }
    }
});


export const { add, remove } = tasksSlice.actions
export default tasksSlice.reducer