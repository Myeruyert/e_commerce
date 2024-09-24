import { createContext, ReactNode, useState } from "react";

type ProfileContextType = {
  person: boolean;
};

type ProfileProviderProps = {
  children: ReactNode;
};

export const ProfileContext = createContext<ProfileContextType | null>(null);

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [person, setPerson] = useState(false);
  return (
    <ProfileContext.Provider value={{ person }}>
      {children}
    </ProfileContext.Provider>
  );
};
