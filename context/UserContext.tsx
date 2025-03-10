import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Định nghĩa kiểu dữ liệu cho thông tin người dùng
interface UserInfo {
  address: string;
  balance: string;
  stakingAddress: string;
  transactions: number;
}

// Định nghĩa kiểu dữ liệu cho context
interface UserContextType {
  userInfo: UserInfo;
  updateUserInfo: (newUserInfo: UserInfo) => void;
  clearUserInfo: () => void;
}

const UserContext = createContext<UserContextType | null>(null); 

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    address: "",
    balance: "0 ADA",
    stakingAddress: "",
    transactions: 0,
  });

  useEffect(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
    }
  }, []);

  const updateUserInfo = (newUserInfo: UserInfo) => {
    setUserInfo(newUserInfo);
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
  };

  const clearUserInfo = () => {
    setUserInfo({
      address: "",
      balance: "0 ADA",
      stakingAddress: "",
      transactions: 0,
    });
    localStorage.removeItem("userInfo");
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUserInfo, clearUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
