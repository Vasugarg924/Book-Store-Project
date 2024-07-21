import React from 'react'
import {useAuth} from "../context/AuthProvider";
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handelLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            
          setTimeout(()=>{
            window.location.reload();
          },2000);
        }catch(err){
            toast.error("Error: "+err);
            setTimeout(()=>{},3000)
        }
    }
  return (
    <>
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handelLogout}>Logout</button>
    </div>
    </>
  )
}

export default Logout