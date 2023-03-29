import { collection, deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { BiConversation } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { auth, db } from '../config/firebase';
import { setId } from '../features/messageSlice';

const RecentChats = ({id}) => {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const [messages] = useCollection(
    collection(db,'users',auth.currentUser.email,'chats',id,'messages')
  )

  const DeleteChat =async()=>{
    await deleteDoc(doc(db,'users',auth.currentUser.email,'chats',id))
    navigate('/app/chat')
  }
  
  return (
    <div className='flex'>
        <NavLink 
          onClick={()=>dispatch(setId(id))}
          to={`chat/${id}`} 
          className='overflow-hidden hover:bg-slate-200 hover:text-black flex rounded-md gap-2 p-3 items-center border'>
        <BiConversation className="text-[1.3rem]" />
  
        <p className=' whitespace-nowrap overflow-hidden text-overflow-ellipsis truncate'>{messages?.docs[messages?.docs.length -1]?.data().content || 'Your chats'}</p>
        
        <BiTrash 
          onClick={DeleteChat}
          className="hover:text-red-500 hover:bg-white hover:rounded-md p-2 text-[2.3rem] " />
        </NavLink>
    </div>
  )
}

export default RecentChats