import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { RegistrationOfUser, LogginOfUser, GetUserById } from '../apis/users.actions';

const initialState = {
    user: null,
    isLoading: false,
    userToken: localStorage.getItem('userToken') || '',
};

export const RegisteringUser = createAsyncThunk(
    'auth/registeringUser',
    async ({ formData, navigate }) => {
        try {
            const response = await RegistrationOfUser(formData);
            toast.success('User created successfully');
            setTimeout(() => {
                navigate('/login');
            }, 2000);

            if (response.status === 400) {
                if (response.data && response.data.Data && response.data.Data.Error) {
                    toast.error(response.data.Data.Message);
                    return Promise.reject(new Error(response.data.Data.Message));
                } else {
                    return Promise.reject(
                        new Error('An unexpected error occurred during registration.')
                    );
                }
            } else {
                return response;
            }
        } catch (error) {
            console.error('Error in Registering User:', error.response.data.Error);
            toast.error(error.response.data.Message);
            return Promise.reject(error);
        }
    }
);

export const LoggingUser = createAsyncThunk('auth/logginguser', async ({ formData, navigate }) => {
    try {
        const response = await LogginOfUser(formData);
        console.log(response.data);

        if (response.status === 200) {
            localStorage.setItem('userToken', response.data.Data);
            toast.success(`Welcome, ${response.data.Message}`);
            setTimeout(() => {
                navigate('/');
            }, 2000);
            return response;
        } else {
            toast.error(response.data.Message);
            return Promise.reject(new Error(response.data.Message));
        }
    } catch (error) {
        toast.error(error.response.data.Message);
        return Promise.reject(error);
    }
});

export const GettingUserById = createAsyncThunk('auth/gettinguserbyid', async (id) => {
    const response = await GetUserById(id);
    console.log(response.data.Data);
    return response.data.Data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('userToken');
            state.userToken = null;
        },
    },

    extraReducers: (builder) => {
        builder

            .addCase(RegisteringUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(RegisteringUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(RegisteringUser.rejected, (state) => {
                state.isLoading = false;
            })

            .addCase(LoggingUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(LoggingUser.fulfilled, (state, action) => {
                state.isLoading = false;
                // Update userToken with the token received in the action payload
                state.userToken = action.payload.data.token;
            })
            .addCase(LoggingUser.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(GettingUserById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GettingUserById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.theSeller = action.payload;
            })
            .addCase(GettingUserById.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
