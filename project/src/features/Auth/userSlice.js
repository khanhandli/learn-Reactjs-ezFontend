import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import Storagekeys from '../../constants/storage-keys';

// First, create the thunk
export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        //call api khi ddanwg ki
        const data = await userApi.register(payload);

        //save data vao local storage
        localStorage.setItem(Storagekeys.TOKEN, data.jwt)
        localStorage.setItem(Storagekeys.USER, JSON.stringify(data.user));

        //return user data
        return data.user;
    }
)

// First, create the thunk
export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
        //call api khi ddanwg ki
        const data = await userApi.login(payload);

        //save data vao local storage
        localStorage.setItem(Storagekeys.TOKEN, data.jwt)
        localStorage.setItem(Storagekeys.USER, JSON.stringify(data.user));

        //return user data
        return data.user;
    }
)

// Then, handle actions in your reducers:
const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(Storagekeys.USER)) || {},
        settings: {
        },
    },
    reducers: {
        logout(state) {
            //clear local storage
            localStorage.removeItem(Storagekeys.TOKEN);
            localStorage.removeItem(Storagekeys.USER);

            state.current = {};
        }
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [register.fulfilled]: (state, action) => {
            // Add user to the state array
            state.current = action.payload
        },

        [login.fulfilled]: (state, action) => {
            // Add user to the state array
            state.current = action.payload
        }
    }
})


const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;