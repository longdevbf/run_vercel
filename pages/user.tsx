import React, { useState, useEffect } from "react";
import { useWallet } from "@meshsdk/react";
import { useTransaction } from "../context/TransactionContext";
import { useUser } from "../context/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { transactions } = useTransaction();
  const { wallet, connected } = useWallet();
  const { userInfo, updateUserInfo } = useUser();
  const [address, setAddress] = useState(userInfo.address || "");
  const [balance, setBalance] = useState(userInfo.balance || "0 ADA");
  const [stakingAddress, setStakingAddress] = useState(userInfo.stakingAddress || "");

  useEffect(() => {
    const fetchWalletData = async () => {
      if (connected && wallet) {
        try {
          const addr = await wallet.getChangeAddress();
          setAddress(addr);

          const utxos = await wallet.getUtxos();
          const totalLovelace = utxos.reduce(
            (sum, utxo) => sum + BigInt(utxo.output.amount.find(a => a.unit === "lovelace")?.quantity || 0),
            BigInt(0)
          );
          const newBalance = (Number(totalLovelace) / 1_000_000).toFixed(5) + " ADA";
          setBalance(newBalance);

          const stakeAddrs = await wallet.getRewardAddresses();
          const newStakingAddress = stakeAddrs.length > 0 ? stakeAddrs[0] : "N/A";
          setStakingAddress(newStakingAddress);

          // Update user info context
          updateUserInfo({
            address: addr,
            balance: newBalance,
            stakingAddress: newStakingAddress,
            transactions,
          });

          // Save to localStorage
          localStorage.setItem("userAddress", addr);
          localStorage.setItem("userBalance", newBalance);
          localStorage.setItem("userStakingAddress", newStakingAddress);
        } catch (error) {
          console.error("Error fetching wallet data:", error);
        }
      }
    };

    if (connected) {
      fetchWalletData();
    } else {
      // Fetch from localStorage if no wallet is connected
      const storedAddress = localStorage.getItem("userAddress");
      const storedBalance = localStorage.getItem("userBalance");
      const storedStakingAddress = localStorage.getItem("userStakingAddress");

      if (storedAddress) setAddress(storedAddress);
      if (storedBalance) setBalance(storedBalance);
      if (storedStakingAddress) setStakingAddress(storedStakingAddress);
    }
  }, [wallet, connected, transactions, updateUserInfo]);

  const copyToClipboard = (text: string) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    }
  };

  const handleDisconnect = () => {
    updateUserInfo({
      address: "",
      balance: "0 ADA",
      stakingAddress: "",
      transactions: 0,
    });

    // Clear from localStorage when disconnecting
    localStorage.removeItem("userAddress");
    localStorage.removeItem("userBalance");
    localStorage.removeItem("userStakingAddress");
  };

  return (
    <div className="dashboard">
      <div className="dashboard__content">
        <div className="dashboard__avatar">
          <img
            className="dashboard__avatar-link"
            src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
            alt="User"
          />
        </div>
        <div className="dashboard__actions">
          <button className="dashboard__button">Lock</button>
          <button className="dashboard__button">Unlock</button>
          <button className="dashboard__button">Refund</button>
          <button className="dashboard__button">Recently</button>
        </div>
      </div>
      <div className="dashboard__info">
        <p className="dashboard__info-item">
          Address: {address ? `${address.slice(0, 6)}...${address.slice(-6)}` : "N/A"}{" "}
          <button className="dashboard__copy-btn" onClick={() => copyToClipboard(address)}>
            📋
          </button>
        </p>
        <p className="dashboard__info-item">
          Staking: {stakingAddress ? `${stakingAddress.slice(0, 6)}...${stakingAddress.slice(-6)}` : "N/A"}{" "}
          <button className="dashboard__copy-btn" onClick={() => copyToClipboard(stakingAddress)}>
            📋
          </button>
        </p>
        <p className="dashboard__info-item">Asset: {balance}</p>
        <p className="dashboard__info-item">Transaction: {transactions}</p>
      </div>
    </div>
  );
};

export default Dashboard;
