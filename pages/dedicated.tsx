import { useState } from 'react';
import { useWallet } from '@meshsdk/react';
import { useTransaction } from "../context/TransactionContext";
import { lock } from '../mesh/functionDepositWithMesh';
import { unlock } from '../mesh/functionWithDrawMesh';
import { useWalletContext } from './index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DedicatedPage = () => {
  // State để kiểm soát hiển thị tab nào (Lock hoặc Unlock)
  const [activeTab, setActiveTab] = useState<'lock' | 'unlock'>('lock');
  
  // Style cho tab navigation ở dưới cùng
  const tabNavigationStyle = {
    marginTop: '40px',
    padding: '20px 0',
    borderTop: '1px solid #dee2e6',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  };
  
  const tabButtonStyle = (isActive: boolean) => ({
    padding: '12px 24px',
    backgroundColor: isActive ? '#007bff' : '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <div className="dedicated-page" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Hiển thị nội dung tab */}
      <div className="tab-content">
        {activeTab === 'lock' ? <LockProperty /> : <UnlockProperty />}
      </div>
      
      {/* Tab navigation ở cuối trang */}
      <div style={tabNavigationStyle}>
        <button 
          onClick={() => setActiveTab('lock')}
          style={tabButtonStyle(activeTab === 'lock')}
        >
          Lock Assets
        </button>
        <button 
          onClick={() => setActiveTab('unlock')}
          style={tabButtonStyle(activeTab === 'unlock')}
        >
          Unlock Assets
        </button>
      </div>
    </div>
  );
};

const LockProperty = () => {
  const { incrementTransactions } = useTransaction();
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [lockUntil, setLockUntil] = useState<Date | null>(null);
  const { connected, wallet } = useWallet();
  
  // Thêm state cho NFT
  const [nftQuantity, setNftQuantity] = useState('');
  const [policyId, setPolicyId] = useState('');
  const [assetName, setAssetName] = useState('');
  
  // Thêm state để lưu trữ txHash
  const [txHash, setTxHash] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  const validateNftFields = () => {
    // Nếu một trong các trường NFT được nhập, tất cả đều phải được nhập
    const hasNftInput = nftQuantity || policyId || assetName;
    
    if (hasNftInput) {
      if (!nftQuantity || !policyId || !assetName) {
        alert("If you want to include an NFT, please fill in all NFT fields (Quantity, Policy ID, and Asset Name).");
        return false;
      }
      
      const quantity = parseInt(nftQuantity);
      if (isNaN(quantity) || quantity <= 0) {
        alert("NFT Quantity must be a positive number.");
        return false;
      }
    }
    
    return true;
  };

  const handleLock = async () => {
    if (!address.trim()) {
      alert("Please enter an address before locking.");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount to lock.");
      return;
    }

    if (!lockUntil) {
      alert("Please select a lock date and time.");
      return;
    }

    // Kiểm tra xem thời gian khóa có nằm trong tương lai không
    if (lockUntil.getTime() <= new Date().getTime()) {
      alert("Please select a future date and time for locking.");
      return;
    }
    
    // Kiểm tra các trường NFT
    if (!validateNftFields()) {
      return;
    }

    try {
      if (!connected) {
        alert("Please connect your wallet first.");
        return;
      }
      
      setIsLoading(true);
      setTxHash(null); // Reset txHash trước khi thực hiện giao dịch mới
      setTransactionSuccess(false); // Reset trạng thái giao dịch thành công
      
      const lockUntilTimeStamp = Math.floor(lockUntil.getTime() / 1000); // Chuyển đổi thành timestamp (seconds)
      
      // Tạo danh sách assets bắt đầu với ADA
      const assets = [{ unit: "lovelace", quantity: parseFloat(amount).toString() }];
      
      // Nếu có nhập thông tin NFT, thêm vào danh sách assets
      if (nftQuantity && policyId && assetName) {
        assets.push({
          unit: policyId + assetName,
          quantity: nftQuantity
        });
      }
      
      // Thực hiện khóa và lưu txHash
      const resultTxHash = await lock(address, assets, wallet, lockUntilTimeStamp);
      setTxHash(resultTxHash);
      setTransactionSuccess(true); // Đánh dấu giao dịch đã thành công
      
      // Gọi incrementTransactions để cập nhật số lượng giao dịch
      incrementTransactions();
      
      // Hiển thị thông báo thành công nhưng không xóa dữ liệu
      alert("Assets locked successfully!");
      
    } catch (error) {
      console.error("Error locking assets:", error);
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Hàm xử lý nút Clear để người dùng chủ động xóa dữ liệu
  const handleClearForm = () => {
    setAddress('');
    setAmount('');
    setLockUntil(null);
    setNftQuantity('');
    setPolicyId('');
    setAssetName('');
    // Giữ lại txHash để người dùng vẫn có thể xem
  };

  return (
    <div className="lock-property">
      <h2 style={{ marginBottom: '20px', color: '#343a40' }}>Lock Assets</h2>
      
      <div className="lock-property__form">
        <div className="form-group">
          <label className="lock-property__label">Beneficiary Address</label>
          <textarea
            className="lock-property__textarea"
            placeholder="Enter beneficiary address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={2}
            style={{ resize: 'none', width: '100%' }}
          />
        </div>

        <div className="form-group">
          <label className="lock-property__label">Amount to Lock (ADA)</label>
          <input
            type="number"
            className="lock-property__input"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <div className="form-group">
          <label className="lock-property__label">Lock Until (Date & Time)</label>
          <DatePicker
            selected={lockUntil}
            onChange={(date: Date | null) => setLockUntil(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            className="lock-property__input"
            placeholderText="Select date and time"
            minDate={new Date()}
          />
        </div>
        
        <div className="form-group">
          <h3>NFT Information (Optional)</h3>
          <div className="nft-fields">
            <div className="nft-field">
              <label className="lock-property__label">NFT Quantity</label>
              <input
                type="number"
                className="lock-property__input"
                placeholder="Enter NFT quantity"
                value={nftQuantity}
                onChange={(e) => setNftQuantity(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            
            <div className="nft-field">
              <label className="lock-property__label">Policy ID</label>
              <input
                type="text"
                className="lock-property__input"
                placeholder="Enter Policy ID"
                value={policyId}
                onChange={(e) => setPolicyId(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            
            <div className="nft-field">
              <label className="lock-property__label">Asset Name</label>
              <input
                type="text"
                className="lock-property__input"
                placeholder="Enter Asset Name"
                value={assetName}
                onChange={(e) => setAssetName(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>

        <div className="button-container">
          <button 
            className="button-lock" 
            onClick={handleLock}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Lock Assets'}
          </button>
          
          {transactionSuccess && (
            <button 
              className="button-clear" 
              onClick={handleClearForm}
              style={{ 
                marginLeft: '10px',
                background: '#6c757d'
              }}
            >
              Clear Form
            </button>
          )}
        </div>
        
        {isLoading && (
          <div className="loading-indicator">
            <p>Processing transaction, please wait...</p>
          </div>
        )}
      </div>

      <div className="lock-property__preview">
        <h3 className="lock-property__preview-title">Preview</h3>
        <div className="lock-property__preview-box">
          <p>
            <strong>Beneficiary:</strong> {address || 'Not specified'}
            <br />
            <strong>Amount:</strong> {amount ? `${amount} ADA` : 'Not specified'}
            <br />
            <strong>Lock Until:</strong> {lockUntil ? lockUntil.toLocaleString() : 'Not specified'}
            
            {(nftQuantity || policyId || assetName) && (
              <>
                <br /><br />
                <strong>NFT Information:</strong><br />
                <strong>Quantity:</strong> {nftQuantity || 'Not specified'}<br />
                <strong>Policy ID:</strong> {policyId || 'Not specified'}<br />
                <strong>Asset Name:</strong> {assetName || 'Not specified'}<br />
                {(policyId && assetName) && (
                  <>
                    <strong>Unit:</strong> {policyId + assetName}
                  </>
                )}
              </>
            )}
          </p>
        </div>
        
        {/* Hiển thị Transaction Hash */}
        {txHash && (
          <div className="transaction-result">
            <h3>Transaction Result</h3>
            <div className="transaction-hash">
              <p><strong>Transaction Hash:</strong></p>
              <div className="hash-value">
                <code>{txHash}</code>
              </div>
              <div className="hash-actions">
                <button 
                  className="copy-button"
                  onClick={() => {
                    navigator.clipboard.writeText(txHash);
                    alert('Transaction hash copied to clipboard');
                  }}
                >
                  Copy
                </button>
                <a 
                  href={`https://preprod.cardanoscan.io/transaction/${txHash}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  View on Explorer
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const UnlockProperty = () => {
  const { incrementTransactions } = useTransaction();
  const [txHashToUnlock, setTxHashToUnlock] = useState('');
  const [resultTxHash, setResultTxHash] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const { connected, wallet } = useWallet();

  const handleUnlock = async () => {
    if (!txHashToUnlock.trim()) {
      alert("Please enter a transaction hash to unlock.");
      return;
    }

    try {
      if (!connected) {
        alert("Please connect your wallet first.");
        return;
      }
      
      setIsLoading(true);
      setResultTxHash(null);
      setTransactionSuccess(false);
      
      // Gọi hàm unlock để mở khóa tài sản
      const unlockTxHash = await unlock(txHashToUnlock, wallet);
      setResultTxHash(unlockTxHash);
      setTransactionSuccess(true);
      
      // Cập nhật số lượng giao dịch
      incrementTransactions();
      
      // Hiển thị thông báo thành công nhưng không xóa dữ liệu
      alert("Assets unlocked successfully!");
      
    } catch (error) {
      console.error("Error unlocking assets:", error);
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearForm = () => {
    setTxHashToUnlock('');
    // Giữ lại txHash kết quả để người dùng vẫn có thể xem
  };

  return (
    <div className="unlock-property">
      <h2 style={{ marginBottom: '20px', color: '#343a40' }}>Unlock Assets</h2>
      
      <div className="unlock-property__form">
        <div className="form-group">
          <label className="unlock-property__label">Transaction Hash to Unlock</label>
          <textarea
            className="unlock-property__textarea"
            placeholder="Enter the transaction hash of the locked assets"
            value={txHashToUnlock}
            onChange={(e) => setTxHashToUnlock(e.target.value)}
            rows={3}
            style={{ resize: 'none', width: '100%' }}
          />
          <p className="form-hint">
            Enter the transaction hash of the locking transaction to unlock your assets.
          </p>
        </div>

        <div className="button-container">
          <button 
            className="button-unlock" 
            onClick={handleUnlock}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Unlock Assets'}
          </button>
          
          {transactionSuccess && (
            <button 
              className="button-clear" 
              onClick={handleClearForm}
              style={{ 
                marginLeft: '10px',
                background: '#6c757d'
              }}
            >
              Clear Form
            </button>
          )}
        </div>
        
        {isLoading && (
          <div className="loading-indicator">
            <p>Processing unlock transaction, please wait...</p>
          </div>
        )}
      </div>

      <div className="unlock-property__preview">
        <h3 className="unlock-property__preview-title">Preview</h3>
        <div className="unlock-property__preview-box">
          <p>
            <strong>Transaction Hash to Unlock:</strong> {txHashToUnlock || 'Not specified'}
          </p>
        </div>
        
        {/* Hiển thị Transaction Hash kết quả */}
        {resultTxHash && (
          <div className="transaction-result">
            <h3>Transaction Result</h3>
            <div className="transaction-hash">
              <p><strong>Unlock Transaction Hash:</strong></p>
              <div className="hash-value">
                <code>{resultTxHash}</code>
              </div>
              <div className="hash-actions">
                <button 
                  className="copy-button"
                  onClick={() => {
                    navigator.clipboard.writeText(resultTxHash);
                    alert('Transaction hash copied to clipboard');
                  }}
                >
                  Copy
                </button>
                <a 
                  href={`https://preprod.cardanoscan.io/transaction/${resultTxHash}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  View on Explorer
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DedicatedPage;