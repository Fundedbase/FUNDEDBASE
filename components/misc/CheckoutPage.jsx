"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { FaCopy, FaCheck, FaExternalLinkAlt } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";

// Production Solana address
// const PROJECT_SOLANA_ADDRESS = "12B1UHinAxijkF5Et8qdju2juN3mST2zeToBxjRYwkLr";
const PROJECT_SOLANA_ADDRESS = "4JVzFysa8kf5UBNAJQ4xkCd8C5LeHCKwj3sjHLNV2wJy";

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const amountUSD = parseFloat(searchParams.get("amount") || "149").toFixed(2);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [solanaPrice, setSolanaPrice] = useState(null);
  const [solAmount, setSolAmount] = useState(null);
  const [isLoadingRate, setIsLoadingRate] = useState(true);
  const [error, setError] = useState(null);
  const [activeQRCode, setActiveQRCode] = useState("usdc");

  // Memoized function to fetch Solana price
  const fetchSolanaPrice = useCallback(async () => {
    try {
      setIsLoadingRate(true);
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd",
        { cache: "no-store" }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Solana price");
      }

      const data = await response.json();
      const price = data.solana.usd;
      setSolanaPrice(price);
      setSolAmount((parseFloat(amountUSD) / price).toFixed(4));
    } catch (err) {
      console.error("Error fetching Solana price:", err);
      setError("Could not load Solana price. Please try again.");
      setSolAmount((parseFloat(amountUSD) / 100).toFixed(4)); // Fallback
    } finally {
      setIsLoadingRate(false);
    }
  }, [amountUSD]);

  // Fetch price on mount and set interval
  useEffect(() => {
    fetchSolanaPrice();
    const interval = setInterval(fetchSolanaPrice, 60000);
    return () => clearInterval(interval);
  }, [fetchSolanaPrice]);

  // Solana Pay URLs
  const solanaPayUsdcUrl = `solana:${PROJECT_SOLANA_ADDRESS}?spl-token=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=${amountUSD}&label=FundedBase&message=Challenge%20Payment%20$${amountUSD}`;
  const solanaPayUsdtUrl = `solana:${PROJECT_SOLANA_ADDRESS}?spl-token=Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB&amount=${amountUSD}&label=FundedBase&message=Challenge%20Payment%20$${amountUSD}`;
  const solanaPaySolUrl = solAmount
    ? `solana:${PROJECT_SOLANA_ADDRESS}?amount=${solAmount}&label=FundedBase&message=Challenge%20Payment%20$${amountUSD}`
    : "";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(PROJECT_SOLANA_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError("Failed to copy address");
    }
  };

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate backend verification
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (transactionHash) {
        const paymentRecord = {
          amount: amountUSD,
          transactionHash,
          timestamp: new Date().toISOString(),
          status: "pending_verification",
        };

        const existingPayments = JSON.parse(
          localStorage.getItem("fundedBasePayments") || "[]"
        );
        localStorage.setItem(
          "fundedBasePayments",
          JSON.stringify([...existingPayments, paymentRecord])
        );
      }

      setPaymentSubmitted(true);
      setTimeout(() => {
        window.location.href = `/payment-success?amount=${amountUSD}&txid=${transactionHash || "manual-verification"
          }`;
      }, 1000);
    } catch (error) {
      console.error("Payment verification failed:", error);
      setError("Failed to verify payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Payment options data
  const paymentOptions = [
    {
      id: "usdc",
      title: "USDC (Preferred)",
      desc: `Send $${amountUSD} USDC on Solana network`,
      url: solanaPayUsdcUrl,
    },
    {
      id: "usdt",
      title: "USDT",
      desc: `Send $${amountUSD} USDT on Solana network`,
      url: solanaPayUsdtUrl,
    },
    {
      id: "sol",
      title: "SOL",
      desc: isLoadingRate
        ? "Loading SOL price..."
        : solAmount
          ? `Send ~${solAmount} SOL`
          : "Price calculation error",
      url: solanaPaySolUrl,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1120] to-[#0f1a2e] flex flex-col items-center pt-34 py-10 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="relative w-fit mx-auto mb-6 ">
          <h1 className="absolute top-0 left-0 font-bold text-[36px] md:text-[60px] leading-[100%] text-emerald-200 opacity-50 blur-[8px] pointer-events-none select-none">
            Get <span className="text-emerald-400">Funded</span>
          </h1>
          {/* Main Title with shimmer effect */}
          <h1 className="relative font-bold text-[36px] md:text-[60px] leading-[100%] overflow-hidden">
            Get{" "}
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 bg-clip-text text-transparent bg-size-200 animate-shimmer">
              Funded
            </span>
          </h1>
        </div>


        {/* Main Content */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Payment Details Column - Left side */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-[#0D1926]/95 to-[#040A14]/95 border border-emerald-800/30 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-lg h-full">
              <h2 className="text-2xl font-bold mb-6 text-emerald-300">
                Complete Your Payment
              </h2>

              {error && (
                <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-200 text-sm">
                  {error}
                </div>
              )}

              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-emerald-50/80">Selected Challenge:</span>
                  <span className="text-2xl font-bold text-white">
                    ${amountUSD} <span className="text-sm text-emerald-400">USD</span>
                  </span>
                </div>

                <div className="bg-[#0a1523]/80 p-4 rounded-xl mb-6">
                  <h3 className="text-emerald-300 text-sm font-medium mb-3">
                    Send payment on the <span className="text-emerald-400 font-semibold">Solana network</span> to:
                  </h3>

                  <div className="bg-[#061019] p-3 rounded-md flex items-center justify-between border border-emerald-900/40 mb-2">
                    <span className="text-emerald-50 text-sm md:text-base font-mono truncate pr-2">
                      {PROJECT_SOLANA_ADDRESS}
                    </span>
                    <button
                      onClick={handleCopyAddress}
                      className="text-white bg-emerald-800/60 hover:bg-emerald-700/70 p-2 rounded-md transition-colors flex-shrink-0"
                      aria-label="Copy address"
                    >
                      {copied ? (
                        <FaCheck className="text-emerald-400" />
                      ) : (
                        <FaCopy />
                      )}
                    </button>
                  </div>

                  <div className="flex justify-between text-xs">
                    <a
                      href={`https://explorer.solana.com/address/${PROJECT_SOLANA_ADDRESS}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 transition-colors"
                    >
                      View on Explorer <FaExternalLinkAlt size={10} />
                    </a>
                  </div>
                </div>

                {/* Payment Tabs */}
                <div className="bg-[#0a1523]/80 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-emerald-300 mb-4">
                    Payment Options
                  </h3>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {paymentOptions.map((option) => (
                      <button
                        key={option.id}
                        className={`p-3 rounded-lg border transition-all ${activeQRCode === option.id
                          ? "bg-emerald-900/40 border-emerald-600/70 text-emerald-300"
                          : "bg-[#061019]/60 border-emerald-900/20 text-emerald-50/70 hover:bg-[#081320]/80"
                          }`}
                        onClick={() => setActiveQRCode(option.id)}
                      >
                        <div className="font-medium">{option.id.toUpperCase()}</div>
                        <div className="text-xs mt-1 opacity-70">
                          {option.id === "sol" && isLoadingRate
                            ? "Loading..."
                            : option.id === "sol"
                              ? `~${solAmount} SOL`
                              : `$${amountUSD}`}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-1 text-sm text-emerald-50/70">
                    <p>• Select your preferred payment token</p>
                    <p>• Scan the QR code with your Solana wallet</p>
                    <p>• Confirm the exact amount shown</p>
                    <p>• Enter transaction hash below after payment</p>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <form onSubmit={handleSubmitPayment} className="mt-6">
                <div className="mb-6">
                  <label className="block text-emerald-300 text-left mb-2 text-sm">
                    Transaction Hash <span className="text-emerald-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={transactionHash}
                    onChange={(e) => setTransactionHash(e.target.value)}
                    className="w-full p-3 bg-[#061019] border border-emerald-800/40 text-white rounded-md focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="Enter Solana transaction hash"
                  />
                  <p className="text-emerald-50/60 text-xs mt-2">
                    Providing the transaction hash speeds up verification
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-emerald-950 font-bold text-lg shadow-lg border border-emerald-400/50 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={paymentSubmitted || loading}
                >
                  <span className="flex items-center justify-center">
                    {loading
                      ? "Verifying..."
                      : paymentSubmitted
                        ? "Payment Confirmed!"
                        : "Confirm Payment"}
                    {loading && <span className="ml-2 animate-spin">⟳</span>}
                  </span>
                </button>
              </form>

              <p className="text-emerald-50/70 text-sm mt-6 text-center">
                Need help? Contact{" "}
                <a
                  href="mailto:support@fundedbase.com"
                  className="text-emerald-400 hover:underline"
                >
                  support@fundedbase.com
                </a>
              </p>
            </div>
          </div>

          {/* QR Code Column - Right side */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-[#0D1926]/95 to-[#040A14]/95 border border-emerald-800/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg h-full flex flex-col items-center justify-center">
              <div className="text-center mb-4">
                <h3 className="text-lg font-medium text-emerald-300 mb-1">
                  Scan to Pay
                </h3>
                <p className="text-emerald-50/70 text-sm">
                  Pay with {activeQRCode.toUpperCase()}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl mb-4 w-full max-w-[240px] mx-auto">
                {activeQRCode === "usdc" && (
                  <QRCodeSVG
                    value={solanaPayUsdcUrl}
                    size={200}
                    fgColor="#000000"
                    bgColor="#FFFFFF"
                    level="H"
                    className="w-full h-auto"
                  />
                )}

                {activeQRCode === "usdt" && (
                  <QRCodeSVG
                    value={solanaPayUsdtUrl}
                    size={200}
                    fgColor="#000000"
                    bgColor="#FFFFFF"
                    level="H"
                    className="w-full h-auto"
                  />
                )}

                {activeQRCode === "sol" && (
                  <>
                    {isLoadingRate ? (
                      <div className="flex flex-col items-center justify-center h-[200px]">
                        <div className="animate-spin h-8 w-8 border-4 border-emerald-500 rounded-full border-t-transparent"></div>
                        <p className="text-gray-500 text-sm mt-4">Loading SOL price...</p>
                      </div>
                    ) : solAmount ? (
                      <QRCodeSVG
                        value={solanaPaySolUrl}
                        size={200}
                        fgColor="#000000"
                        bgColor="#FFFFFF"
                        level="H"
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-[200px]">
                        <p className="text-red-500">Could not calculate SOL amount</p>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="text-center">
                <p className="text-emerald-50/90 font-medium">
                  {activeQRCode === "sol"
                    ? isLoadingRate
                      ? "Loading..."
                      : `${solAmount} SOL`
                    : `$${amountUSD} ${activeQRCode.toUpperCase()}`}
                </p>
                {activeQRCode === "sol" && solanaPrice && (
                  <p className="text-xs text-emerald-50/70 mt-1">
                    (1 SOL ≈ ${solanaPrice?.toFixed(2)} USD)
                  </p>
                )}
              </div>

              {/* <div className="mt-6 w-full">
                <a
                  href={
                    activeQRCode === "usdc"
                      ? solanaPayUsdcUrl
                      : activeQRCode === "usdt"
                        ? solanaPayUsdtUrl
                        : solanaPaySolUrl
                  }
                  className="block w-full py-3 bg-emerald-800/40 hover:bg-emerald-800/60 text-emerald-300 text-center rounded-lg border border-emerald-700/50 transition-colors"
                >
                  Open in Wallet
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;