"use client";

import { auth, signInWithEmailAndPassword, onAuthStateChanged } from "../firebaseConfig/page";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { email, password } = data;
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      toast.success("Login Successfully...");
      
      // Delay navigation to show the toast
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
      
      reset();
    } catch (error: any) {
      toast.error(error.message || "Please try again!");
    }
  };
  

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
          router.push("/dashboard");
      }
    });
  })

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form
        className="flex flex-col justify-center h-[400px] rounded-lg bg-slate-200 backdrop:blur-[20px] w-[40%] p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl mb-4 font-bold text-center">
          Welcome Back...!
        </h1>
        <input
          type="email"
          className="my-3 h-[40px] p-2 text-[18px] rounded-md"
          placeholder="enter email..."
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}

        <input
          type="password"
          placeholder="enter password..."
          className="my-3 h-[40px] p-2 text-[18px] rounded-md"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input
          className="my-3 h-[40px] cursor-pointer text-[20px] bg-gray-400 rounded-md"
          type="submit"
        />
        <Link className="text-center text-gray-800 mt-4" href="/">
          Create account? Sign in
        </Link>
      </form>
      <ToastContainer />
    </div>
  );
}
