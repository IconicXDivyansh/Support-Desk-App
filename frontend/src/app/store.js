import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import ticketReducer from '../features/tickets/ticketSlice';
import notesReducer  from '../features/notes/noteSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        tickets: ticketReducer,
        notes: notesReducer
    },
});

export default store;