"use client";
import React, { createContext, useEffect, useState } from "react";
import { IUser, UserContextType } from "@/interface";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({
  user: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    rePassword: "",
  },
  token: "",
  setUser: () => {},
  setToken: () => {},
  fetchUserData: () => {},
  refetch: false,
  setRefetch: () => {},
  handleSignUp: async () => {},
  handleSignIn: async () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [refetch, setRefetch] = useState(false);
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<IUser>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const router = useRouter();

  const handleSignIn = async () => {
    const { email, password } = user;
    try {
      const res = await axios.post(`${apiUrl}/api/v1/auth/login`, {
        email,
        password,
      });
      if (res.status === 201) {
        toast.success("User signed in successfully");
        const { token } = res.data;
        localStorage.setItem("token", token);
        router.push("/");
      }
      console.log("res", res);
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  const handleSignUp = async () => {
    const { firstname, lastname, email, password, rePassword } = user;
    if (password !== rePassword) {
      toast.error("Password doesn't match");
      return;
    }
    try {
      // setIsLoading(true);
      const res = await fetch(`${apiUrl}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
      });
      if (res.status === 201) {
        console.log("res", res);
        toast.success("User signed up successfully");
        // setIsLoading(false);
        router.push("/signin");
      }
    } catch (error) {
      // res.status(400).json({ message: "Failed to sign up. Please try again." });
      console.error("There was an error signing up:", error);
      // setIsLoading(false);
      toast.error("Failed to sign up. Please try again.");
    }
  };

  console.log("UD", user);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token") || "";
      const response = await axios.get(`${apiUrl}/api/v1/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        const { user } = response.data;
        console.log("USERrr", response.data);
        setUser(user);
        setRefetch(!refetch);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log("USER", user);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        fetchUserData,
        refetch,
        setRefetch,
        handleSignUp,
        handleSignIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
