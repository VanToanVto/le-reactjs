import userApi from '../../api/userApi';
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const register = createAsyncThunk(
    'users/register',
    async (payLoad) => {
        // call api to register
        const data = await userApi.register(payLoad);
        // save data
        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data.user;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        setting: {},
    },
    reducers: {

    },

    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payLoad;
        }
    }
});

const { reducer } = userSlice;
export default reducer;