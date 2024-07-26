import React from 'react'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function Signup() {
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || "/"
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) =>{
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
        }
        await axios.post("https://book-store-backend-ujwy.onrender.com/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('Signup Successfull');
                navigate(from, {replace: true});
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((err)=>{
            if(err.response){
                toast.error("Error: "+err.response.data.message);
            }
        })
    };
  return (
    <>
      <div className='flex h-screen items-center justify-center '>
          <div  className="w-[600px]">
              <div className="modal-box dark:bg-slate-600 dark:text-white">
                  <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-600 dark:text-white" onClick={()=>window.location.href="/"}>✕</button>
                  
                  <h3 className="font-bold text-lg dark:bg-slate-600 dark:text-white">Signup</h3>
                          <div className='mt-4 spacey-2'>
                              <span>Name</span>
                              <br />
                              <input type="text" placeholder='Enter Your Name' className='w-80 px-3 border rounded-md outline-none py-1 dark:text-black' {...register("fullname", { required: "This field is required" })} />
                              <br />
                              {errors.fullname && <span className="text-red-500 text-sm">This Field is Required</span>}
                          </div>
                          <div className='mt-4 spacey-2'>
                              <span>Email</span>
                              <br />
                              <input type="email" placeholder='Enter Your Email' className='w-80 px-3 border rounded-md outline-none py-1 dark:text-black' {...register("email", { required: "This field is required" })} />
                              <br />
                              {errors.email && <span className="text-red-500 text-sm">This Field is Required</span>}
                          </div>
                  {/* Password */}
                  <div className='mt-4 spacey-2'>
                      <span>Password</span>
                      <br />
                      <input type="password" placeholder='Enter Your Password' className='w-80 px-3 border rounded-md outline-none py-1 dark:text-black' {...register("password", { required: "This field is required" })}/>
                      <br />
              {errors.password && <span className="text-red-500 text-sm">This Field is Required</span>}
                  </div>
                  {/* Button */}
                  <div className='flex justify-around mt-4'>
                      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-700'>Signup</button>
                          <p className='text-xl'>Have an account?{" "}
                              <button className="underline text-blue-500 cursor-pointer" onClick={(()=>document.getElementById("my_modal_3").showModal())}>
                                  Login
                              </button>{" "}
                              <Login/>
                          </p>
                          
                  </div>
                  </form>
              </div>
          </div>

      </div>
      </>
  )
}

export default Signup