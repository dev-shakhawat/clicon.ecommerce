"use client";
import { userInfoSet } from "@/lib/slices/authSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Authcheck = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/authuser`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(userInfoSet(res.data.data));
        console.log(res);
      })
      .catch((err) => {
        dispatch(userInfoSet(null));
      });
  }, []);

  return <>{children}</>;
};

export default Authcheck;
