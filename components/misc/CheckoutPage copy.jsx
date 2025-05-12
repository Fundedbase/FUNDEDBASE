"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaCopy, FaCheck, FaExternalLinkAlt } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";



// Production Solana address - replace with your actual project address
const PROJECT_SOLANA_ADDRESS = "3HqXFsWqZyRzBzMGTYAcaVdqzLW71YFXk7aKN45AXCFF";

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const amountUSD = searchParams.get("amount") || "149";
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [solanaPrice, setSolanaPrice] = useState(null);
  const [solAmount, setSolAmount] = useState(null);
  const [isLoadingRate, setIsLoadingRate] = useState(true);
  const [error, setError] = useState(null);

  // Fetch current Solana price
  useEffect(() => {
    const fetchSolanaPrice = async () => {
      try {
        setIsLoadingRate(true);
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Solana price');
        }
        
        const data = await response.json();
        const price = data.solana.usd;
        setSolanaPrice(price);
        
        // Calculate SOL amount based on USD price
        const calculatedAmount = (parseFloat(amountUSD) / price).toFixed(4);
        setSolAmount(calculatedAmount);
      } catch (err) {
        console.error('Error fetching Solana price:', err);
        setError('Could not load current Solana price. Please refresh or contact support.');
        // Fallback to estimated value
        setSolAmount((parseFloat(amountUSD) / 100).toFixed(4)); // Assuming $100 per SOL as fallback
      } finally {
        setIsLoadingRate(false);
      }
    };

    fetchSolanaPrice();
    
    // Refresh price every 60 seconds
    const interval = setInterval(fetchSolanaPrice, 60000);
    
    return () => clearInterval(interval);
  }, [amountUSD]);

  // For Solana Pay format - using USDC/USDT tokens instead of native SOL
  const solanaPayUsdcUrl = `solana:${PROJECT_SOLANA_ADDRESS}?spl-token=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=${amountUSD}&label=FundedBase&message=Challenge%20Payment%20$${amountUSD}`;
  const solanaPayUsdtUrl = `solana:${PROJECT_SOLANA_ADDRESS}?spl-token=Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB&amount=${amountUSD}&label=FundedBase&message=Challenge%20Payment%20$${amountUSD}`;
  const solanaPaySolUrl = solAmount ? `solana:${PROJECT_SOLANA_ADDRESS}?amount=${solAmount}&label=FundedBase&message=Challenge%20Payment%20$${amountUSD}` : "";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(PROJECT_SOLANA_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Here you would typically submit the transaction ID to your backend
      // for verification and database storage
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // If backend confirms transaction (simulated here)
      setPaymentSubmitted(true);
      
      // Store transaction info in localStorage for temporary persistence
      if (transactionHash) {
        const paymentRecord = {
          amount: amountUSD,
          transactionHash,
          timestamp: new Date().toISOString(),
          status: 'pending_verification' // Your backend would update this
        };
        
        // Save payment info for persistence across page refreshes
        const existingPayments = JSON.parse(localStorage.getItem('fundedBasePayments') || '[]');
        localStorage.setItem('fundedBasePayments', JSON.stringify([...existingPayments, paymentRecord]));
      }
      
      // Redirect to success page
      setTimeout(() => {
        window.location.href = `/payment-success?amount=${amountUSD}&txid=${transactionHash || 'manual-verification'}`;
      }, 1000);
    } catch (error) {
      console.error("Payment verification failed:", error);
      setError("There was an issue verifying your payment. Please try again or contact support.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0a1120] to-[#0f1a2e] min-h-screen">
      <div className="relative z-10 pt-10 lg:pt-14 flex flex-col items-center justify-center gap-6 text-center px-4">
        {/* Gap */}
        <div className="m-[1.2rem] lg:m-[2rem]"></div>
        {/* Title */}
        <div className="relative w-fit">
          {/* Blured BG layer */}
          <h1 className="absolute top-0 left-0 geist font-semibold text-[36px] md:text-[60px] leading-[100%] max-w-[754px] text-white opacity-50 blur-[4px] pointer-events-none select-none">
            Get Funded
          </h1>
          {/* Main Title */}
          <h1 className="relative geist font-semibold text-[36px] md:text-[60px] leading-[100%] max-w-[754px] text-white">
            Get Funded
          </h1>
        </div>
      </div>

      <div className="relative w-full lg:w-[600px] mx-auto mt-[2rem] lg:mt-[2.5rem] !mb-[4rem] lg:!mb-[5rem] px-3">
        <div className="bg-gradient-to-br from-[#0D1926]/90 to-[#040A14]/90 border border-emerald-800/30 backdrop-blur-[16.2px] p-8 rounded-[16px] shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-emerald-300 text-center">Complete Your Payment</h2>
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-6">
            <div className="order-2 md:order-1">
              <p className="text-emerald-50/80 mb-2">
                Selected Challenge:
              </p>
              <p className="text-2xl font-bold text-white mb-4">
                ${amountUSD} <span className="text-sm text-emerald-400">USD</span>
              </p>
              
              <div className="space-y-4">
                <p className="text-emerald-50/80 text-sm">
                  Please send payment using one of these methods on the <span className="text-emerald-300">Solana network</span> to:
                </p>
                
                {/* Solana Address */}
                <div className="bg-[#0D1926] p-3 rounded-md flex items-center justify-between border border-emerald-900/40">
                  <span className="text-emerald-50 text-sm truncate font-mono">
                    {PROJECT_SOLANA_ADDRESS}
                  </span>
                  <button 
                    onClick={handleCopyAddress}
                    className="text-white bg-emerald-800/40 p-2 rounded-md hover:bg-emerald-700/50 transition-colors"
                    aria-label="Copy address"
                  >
                    {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={`https://explorer.solana.com/address/${PROJECT_SOLANA_ADDRESS}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-400 text-xs hover:underline flex items-center gap-1"
                  >
                    View on Explorer <FaExternalLinkAlt size={10} />
                  </a>
                  
                  <a 
                    href={solanaPayUsdcUrl}
                    className="text-emerald-400 text-xs hover:underline"
                  >
                    Pay with USDC
                  </a>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 bg-white p-4 rounded-md shadow-md">
              <div className="mb-3 text-center">
                <div className="flex gap-2 justify-center mb-2">
                  <button 
                    className="text-xs px-2 py-1 rounded bg-emerald-500 text-white font-medium"
                    onClick={() => document.getElementById('qrcode-usdc').classList.remove('hidden')}
                  >
                    USDC
                  </button>
                  <button 
                    className="text-xs px-2 py-1 rounded bg-emerald-500 text-white font-medium"
                    onClick={() => document.getElementById('qrcode-usdt').classList.remove('hidden')}
                  >
                    USDT
                  </button>
                  <button 
                    className="text-xs px-2 py-1 rounded bg-emerald-500 text-white font-medium"
                    onClick={() => document.getElementById('qrcode-sol').classList.remove('hidden')}
                  >
                    SOL
                  </button>
                </div>
              </div>
              
              <div id="qrcode-usdc">
                <QRCodeSVG 
                  value={solanaPayUsdcUrl}
                  size={150}
                  fgColor="#000000"
                  bgColor="#FFFFFF"
                  level="H"
                  className="mx-auto"
                />
                <p className="text-center text-gray-500 text-xs mt-2">Scan to pay ${amountUSD} USDC</p>
              </div>
              
              <div id="qrcode-usdt" className="hidden">
                <QRCodeSVG 
                  value={solanaPayUsdtUrl}
                  size={150}
                  fgColor="#000000"
                  bgColor="#FFFFFF"
                  level="H"
                  className="mx-auto"
                />
                <p className="text-center text-gray-500 text-xs mt-2">Scan to pay ${amountUSD} USDT</p>
              </div>
              
              <div id="qrcode-sol" className="hidden">
                {isLoadingRate ? (
                  <div className="flex flex-col items-center justify-center h-[150px]">
                    <p className="text-gray-500 text-sm">Loading SOL price...</p>
                  </div>
                ) : solAmount ? (
                  <>
                    <QRCodeSVG 
                      value={solanaPaySolUrl}
                      size={150}
                      fgColor="#000000"
                      bgColor="#FFFFFF"
                      level="H"
                      className="mx-auto"
                    />
                    <p className="text-center text-gray-500 text-xs mt-2">
                      Scan to pay {solAmount} SOL
                      <br/>
                      <span className="text-xs text-gray-400">
                        (Current rate: 1 SOL ≈ ${solanaPrice})
                      </span>
                    </p>
                  </>
                ) : (
                  <p className="text-center text-red-500 text-xs mt-2">Could not calculate SOL amount</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="border-t border-emerald-800/30 my-6 pt-6">
            <h3 className="text-lg font-semibold text-emerald-300 mb-4">Payment Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#0D1926]/80 p-4 rounded-md border border-emerald-800/20">
                <h4 className="font-medium text-emerald-300 mb-2">USDC (Preferred)</h4>
                <p className="text-emerald-50/70 text-xs">Send exactly ${amountUSD} USDC on Solana network</p>
              </div>
              <div className="bg-[#0D1926]/80 p-4 rounded-md border border-emerald-800/20">
                <h4 className="font-medium text-emerald-300 mb-2">USDT</h4>
                <p className="text-emerald-50/70 text-xs">Send exactly ${amountUSD} USDT on Solana network</p>
              </div>
              <div className="bg-[#0D1926]/80 p-4 rounded-md border border-emerald-800/20">
                <h4 className="font-medium text-emerald-300 mb-2">SOL</h4>
                <p className="text-emerald-50/70 text-xs">
                  {isLoadingRate 
                    ? 'Loading SOL price...' 
                    : solAmount 
                      ? `Send approximately ${solAmount} SOL` 
                      : 'Price calculation error'}
                </p>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-emerald-300 mb-4">Payment Instructions</h3>
            <ol className="list-decimal list-inside space-y-2 text-emerald-50/80 text-sm mb-6">
              <li>Choose your preferred payment method (USDC, USDT, or SOL)</li>
              <li>Send <strong className="text-emerald-400">the exact amount</strong> to the address above</li>
              <li>Make sure to use the <strong className="text-emerald-400">Solana network</strong></li>
              <li>After sending, enter the transaction hash below</li>
              <li>Click "Confirm Payment" to complete the process</li>
            </ol>
          </div>
          
          {/* Payment Confirmation Form */}
          <form onSubmit={handleSubmitPayment}>
            <div className="mb-6">
              <label className="block text-emerald-300 text-left mb-2 text-sm">
                Transaction Hash <span className="text-emerald-400">(recommended)</span>
              </label>
              <input 
                type="text" 
                value={transactionHash}
                onChange={(e) => setTransactionHash(e.target.value)}
                className="w-full p-3 bg-[#0D1926] border border-emerald-800/40 text-white rounded-md focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Enter Solana transaction hash"
              />
              <p className="text-emerald-50/60 text-xs mt-2">
                Providing the transaction hash helps us verify your payment faster and activate your account immediately
              </p>
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-600 text-emerald-950 font-bold text-lg shadow-lg border border-emerald-400 hover:from-emerald-500 hover:to-emerald-700 transition-all duration-200 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={paymentSubmitted || loading}
            >
              <span className="relative z-10 flex items-center justify-center">
                {loading ? "Verifying..." : paymentSubmitted ? "Payment Confirmed!" : "Confirm Payment"}
                {loading && <span className="ml-2 animate-spin">⟳</span>}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </form>
          
          {error && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-200 text-sm">
              {error}
            </div>
          )}
          
          <p className="text-emerald-50/70 text-sm mt-6 text-center">
            Need help? Contact our support at <a href="mailto:support@fundedbase.com" className="text-emerald-400 hover:underline">support@fundedbase.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
