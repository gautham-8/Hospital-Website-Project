import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Login - cookie is set by the server's Set-Cookie header automatically
export const userLogin = createAsyncThunk('user/login', async (userCredentialsObject, thunkApi) => {
    try {
        const response = await axios.post('/api/users/login', userCredentialsObject);
        const data = response.data;
        if (data.message === 'success') {
            return data.userObj; // { email, role, phone }
        }
        return thunkApi.rejectWithValue(data);
    } catch (err) {
        const msg = err.response?.data?.message || 'Login failed. Please try again.';
        return thunkApi.rejectWithValue({ message: msg });
    }
});

// Called on app mount to rehydrate state from the httpOnly cookie session
export const fetchCurrentUser = createAsyncThunk('user/fetchCurrentUser', async (_, thunkApi) => {
    try {
        const response = await axios.get('/api/users/me');
        return response.data; // { email, role, phone }
    } catch {
        return thunkApi.rejectWithValue(null);
    }
});

// Logout - clears the server-side cookie
export const userLogout = createAsyncThunk('user/logout', async () => {
    await axios.post('/api/users/logout');
});

const initialState = {
    email: null,
    role: null,
    phone: null,
    isAuthenticated: false,
    isSessionLoading: true, // true until fetchCurrentUser resolves on mount
    isLoading: false,
    isError: false,
    errMsg: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearLoginStatus: () => ({ ...initialState, isSessionLoading: false }),
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(userLogin.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.errMsg = '';
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.email = action.payload.email;
                state.role = action.payload.role;
                state.phone = action.payload.phone;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errMsg = action.payload?.message || 'Login failed. Please try again.';
            })
            // Fetch current user (session restore on mount)
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.isSessionLoading = false;
                state.isAuthenticated = true;
                state.email = action.payload.email;
                state.role = action.payload.role;
                state.phone = action.payload.phone;
            })
            .addCase(fetchCurrentUser.rejected, (state) => {
                state.isSessionLoading = false;
                state.isAuthenticated = false;
            })
            // Logout
            .addCase(userLogout.fulfilled, () => ({ ...initialState, isSessionLoading: false }));
    },
});

export const { clearLoginStatus } = userSlice.actions;
export default userSlice.reducer;
