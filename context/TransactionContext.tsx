import { createContext, useContext, useState } from "react";

interface TransactionContextType {
  transactions: number;
  incrementTransactions: () => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState(0);

  const incrementTransactions = () => {
    setTransactions((prev) => prev + 1);
  };

  return (
    <TransactionContext.Provider value={{ transactions, incrementTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }
  return context;
};
