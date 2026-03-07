import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//make HTTP POST req to login user
export const userLogin=createAsyncThunk('loginuser',async(userCredentialsObject,thunkApi)=>{
    try {
        let response=await axios.post('/api/users/login',userCredentialsObject);
        let data=response.data;
        if(data.message==='success'){
            localStorage.setItem('token',data.payload);
            localStorage.setItem('isLogin','true');
            localStorage.setItem('userObj',JSON.stringify(data.userObj));
            return data.userObj;
        }
        return thunkApi.rejectWithValue(data);
    } catch(err) {
        const msg = err.response?.data?.message || 'Login failed. Please try again.';
        return thunkApi.rejectWithValue({ message: msg });
    }
})

const storedUser = localStorage.getItem('userObj');
const storedIsLogin = localStorage.getItem('isLogin') === 'true';

let userSlice=createSlice({
    name:'user',
    initialState:{
        userObj: storedUser ? JSON.parse(storedUser) : {},
        isError:false,
        isSuccess: storedIsLogin,
        isLoading:false,
        errMsg:''
    },
    reducers:{
        clearLoginStatus:(state)=>{
            state.isSuccess=false;
            state.userObj=null;
            state.isError=false;
            state.errMsg='';
            localStorage.removeItem('token');
            localStorage.removeItem('isLogin');
            localStorage.removeItem('userObj');
            return state;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(userLogin.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(userLogin.fulfilled,(state,action)=>{
            state.userObj=action.payload;
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.errMsg='';
        })
        .addCase(userLogin.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.errMsg=action.payload?.message || 'Login failed. Please try again.';
        })
    }
})

// action creators
export const {clearLoginStatus}=userSlice.actions;
// reducer
export default userSlice.reducer
