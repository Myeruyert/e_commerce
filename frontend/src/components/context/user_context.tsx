"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { IUser, UserContextType } from "@/interface";

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({
  user: {
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
  },
  token: "",
  setUser: () => {},
  setToken: () => {},
  fetchUserData: () => {},
  refetch: false,
  setRefetch: () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [refetch, setRefetch] = useState(false);
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<IUser>({
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
  });

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
