import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import noteService from './noteService';

const initialState = {
    notes: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}


// get user note
export const getNotes = createAsyncThunk('notes/getAll', async (ticketId, thunkAPI) => { 
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await noteService.getNotes(ticketId,token);
    } catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

// create user note
export const createNote = createAsyncThunk('notes/create', async ({noteText, ticketId}, thunkAPI) => { 
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await noteService.createNote(noteText,ticketId,token);
    } catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})




export const notesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => { 
        builder.addCase(getNotes.pending, (state) => { 
            state.isLoading = true
        })
        .addCase(getNotes.fulfilled, (state,action) => { 
            state.isLoading = false
            state.isSuccess = true
            state.notes = action.payload
        })
        .addCase(getNotes.rejected, (state, action) => { 
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        builder.addCase(createNote.pending, (state) => { 
            state.isLoading = true
        })
        .addCase(createNote.fulfilled, (state,action) => { 
            state.isLoading = false
            state.isSuccess = true
            state.notes.push(action.payload)
        })
        .addCase(createNote.rejected, (state, action) => { 
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }

})


export const { reset } = notesSlice.actions;

export default notesSlice.reducer;