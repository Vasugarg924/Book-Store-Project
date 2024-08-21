import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data )=>{
    const userInfo={
      email:data.email,
      password:data.password,
  }
  await axios.post("https://book-store-project-1-yx7t.onrender.com/user/login",userInfo)
  .then((res)=>{
      console.log(res.data)
      if(res.data){
          toast.success('Login Successfull');
          document.getElementById("my_modal_3").close();
          setTimeout(()=>{
            window.location.reload();
            localStorage.setItem("Users",JSON.stringify(res.data.user))
          },1000);
      }
  }).catch((err)=>{
      if(err.response){
          toast.error("Error: "+err.response.data.message);
          setTimeout(()=>{},2000)
      }
  })
  };
  
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-600 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-600 dark:text-white" onClick={() => window.location.href = "/"}>✕</button>
            
            <h3 className="font-bold text-lg dark:bg-slate-600 dark:text-white">Login</h3>
            
            {/* Email */}
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
              <input type="password" placeholder='Enter Your Password' className='w-80 px-3 border rounded-md outline-none py-1 dark:text-black' {...register("password", { required: "This field is required" })} />
              <br />
              {errors.password && <span className="text-red-500 text-sm">This Field is Required</span>}
            </div>
            
            {/* Button */}
            <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-700' >Login</button>
              <p>Not registered? <Link className='underline text-blue-500 cursor-pointer' to="/signup">Signup here</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
