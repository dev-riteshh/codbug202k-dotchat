import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    messageList : [],
    id : null
}



const messageSlice = createSlice({
    name : 'messages',
    initialState ,
    reducers:{
        addMessage : (state,action)=>{
            state.messageList.push(action.payload)
        },
        setId : (state,action)=>{
            state.id = action.payload
        },
        setMessages: (state, action) => {
            state.messageList = action.payload;
        },
    }
})

export default messageSlice.reducer
export const selectRoomId = (state) => state.messages.id;
export const {addMessage,setId,setMessages} = messageSlice.actions



