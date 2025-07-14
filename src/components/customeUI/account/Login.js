"use client";

import Arrow from "@/icons/Arrow";
import Eye from "@/icons/Eye";
import { ActiveModalSet, userInfoSet } from "@/lib/slices/authSlice";

import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (res.data.success == true) {
        dispatch(userInfoSet(res.data.data));
        localStorage.setItem("userInfo", JSON.stringify(res.data.data));
        toast.success("Login Successfully");
      }
      // optionally close modal or redirect
    } catch (err) {
      toast.error(err.response.data.message || "something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-white lg:min-w-[360px]">
      <Toaster position="top-center" reverseOrder={false} />
      {/* title */}
      <h2 className=" font-Public_Sans font-semibold text-xl text-center text-[#191C1F]">
        Sign in to your account
      </h2>

      {/* login form */}
      <form onSubmit={handleLogin}>
        {/* Email */}
        <div className="mt-5">
          <label htmlFor="email" className="font-Public_Sans text-sm">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[48px] border px-4 mt-2"
            required
          />
        </div>

        {/* Password */}
        <div className="mt-4 relative">
          <div className="flex justify-between text-sm">
            <span>Password</span>
            <button
              type="button"
              onClick={() => dispatch(ActiveModalSet("forgetPass"))}
              className="text-[#2DA5F3]"
            >
              Forgot Password?
            </button>
          </div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[48px] border px-4 pr-10 mt-2"
            required
          />
          <Eye className="absolute top-[40px] right-4 w-[20px] h-[20px]" />
        </div>

        {/* Sign In button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-[48px] bg-[#FA8232] text-white mt-6 flex items-center justify-center gap-2 uppercase font-bold"
        >
          {loading ? "Logging in..." : "Login"}
          {!loading && <Arrow className="w-[20px] h-[20px]" />}
        </button>
      </form>

      {/* Divider */}
      <div className="flex justify-center mt-6 relative after:content-[''] after:w-1/4 after:h-[1px] after:bg-[#e4e7e9] after:absolute after:top-[10px] after:left-0 before:content-[''] before:w-1/4 before:h-[1px] before:bg-[#e4e7e9] before:absolute before:top-[10px] before:right-0 ">
        <span className="text-sm text-[#77878F]">Don’t have an account?</span>
      </div>

      {/* Create account */}
      <button
        type="button"
        onClick={() => dispatch(ActiveModalSet("registration"))}
        className="w-full h-[48px] border border-[#FA8232] text-[#FA8232] mt-3 flex items-center justify-center gap-2 uppercase font-bold"
      >
        Create Account
      </button>
    </div>
  );
}
