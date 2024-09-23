"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

interface UserContextType {
  username: string;
}

type UserProvider = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: UserProvider) => {
  const [refetch, setRefetch] = useState(false);
  const [user, setUser] = useState({
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/api/v1/auth/login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        const { user } = response.data;
        console.log("USER", user);
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

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
