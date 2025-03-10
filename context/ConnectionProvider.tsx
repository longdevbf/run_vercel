import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ConnectionContextType = {
  isConnected: boolean;
  connect: () => void;
  disconnect: () => void;
};

const ConnectionContext = createContext<ConnectionContextType | undefined>(undefined);

export const useConnection = () => {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error("useConnection must be used within a ConnectionProvider");
  }
  return context;
};

type ConnectionProviderProps = {
  children: ReactNode;
};

export const ConnectionProvider = ({ children }: ConnectionProviderProps) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  // Kiểm tra trạng thái kết nối từ localStorage khi component được mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedConnectionStatus = localStorage.getItem("connected");
      if (savedConnectionStatus === "true") {
        setIsConnected(true);
      }
    }
  }, []);

  // Cập nhật trạng thái kết nối vào localStorage mỗi khi thay đổi
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("connected", isConnected.toString());
    }
  }, [isConnected]);

  // Hàm kết nối
  const connect = () => setIsConnected(true);

  // Hàm ngắt kết nối
  const disconnect = () => {
    setIsConnected(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem("connected");
    }
  };

  return (
    <ConnectionContext.Provider value={{ isConnected, connect, disconnect }}>
      {children}
    </ConnectionContext.Provider>
  );
};
