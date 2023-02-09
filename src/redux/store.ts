import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/tasks/tasksSlice';
import taskReducer from './features/task/taskSlice';
import uiReducer from './features/ui/uiSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        task: taskReducer,
        ui: uiReducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: false
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;