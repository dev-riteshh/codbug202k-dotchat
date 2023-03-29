import { signOut } from 'firebase/auth';
import { collection } from 'firebase/firestore';
import React from 'react'
import {useCollection} from 'react-firebase-hooks/firestore'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useEffect,useState } from 'react';
import { BiPlus } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase';
import RecentChats from './RecentChats';




const Sidebar = () => {

  const navigate = useNavigate()
  // const [user] = useAuthState(auth);

  


  const [chats]=useCollection(
    collection(db,'users',auth.currentUser.email,'chats')
  )

  


  // const createNewRoom = async()=>{
  //   const docRef = collection(db,'users',auth.currentUser.email,'chats')

  //   const doc = await addDoc(docRef,{
  //     user : auth.currentUser.email,
  //     createdAt : serverTimestamp(),
  //   })
  //   navigate(`chat/${doc.id}`)
  // }

  const Logout = async ()=>{
    try {
      await signOut(auth)
      console.log('sucessful')
      console.log(auth.currentUser)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }


  

  return (
    <div className='bg-[#171f3c] gap-5 items-center flex flex-col py-5 mt-2 rounded-md w-[250px]'>
      <button
      //  onClick={createNewRoom}
       className='p-2 flex justify-center items-center px-8 rounded-md bg-indigo-600'
       > <BiPlus className='text-[1.4rem] mr-2'/> New Chat</button>

       <div className='h-full'>
         {/* <h1 className=' text-center mt-5 text-lg pb-2 '>Recent chats</h1> */}
         <div className='flex flex-col gap-3'>
          {
            chats?.docs.map(chat=>{
              return <RecentChats id={chat.id} key={chat.id} />
            })
          }
         </div>
       </div>

      <div className='flex gap-2 justify-center items-center'> 
        <h1 className='text-[1.1rem] w-2/4 overflow-hidden truncate'>hey {auth.currentUser.email}</h1>
      </div>

      <button
       onClick={Logout}
       className='p-2 px-8 rounded-md border'
       >Log Out</button>
    </div>
  )
}

export default Sidebar