import { createSlice } from '@reduxjs/toolkit';

import { userList } from './Data'
const userSlice = createSlice({
    name : 'users',
    initialState:userList,
    reducers:{
        adduser:(state,action)=>{
            // console.log(action)
            state.push(action.payload);
        },
        updateuser:(state,action)=>{
            const {id ,name,email} = action.payload
            const uu = state.find(user=> user.id ==id)
            if(uu){
                uu.name=name;
                uu.email=email;
            }
            // console.log(action)
            // state.push(action.payload);
        },
        deleteUser:(state,action)=>{
            const {id } = action.payload
            const uu = state.find(user=> user.id ==id)
            if(uu){
                return state.filter(f => f.id !==id);
            }

        }

    }
})
export const{adduser,updateuser,deleteUser}=userSlice.actions;
export default  userSlice.reducer;