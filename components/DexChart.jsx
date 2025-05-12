import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const DexChart = () => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.dexscreener.com/token-boosts/latest/v1");
        const data = await res.json();

        const solTokens = data.filter((t) => t.chainId === "solana").slice(0, 15); // limit to 10
        setTokens(solTokens);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching token data:", err);
        setError("Failed to load trending tokens");
        setLoading(false);
      }
    };

    fetchData();
    
    // Set up a refresh interval - refresh data every 2 minutes
    const intervalId = setInterval(fetchData, 120000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Token card component
  const TokenCard = ({ token, idx }) => (
    <a
      href={token.url}
      target="_blank"
      rel="noopener noreferrer"
      key={idx}
      className="flex flex-col w-full bg-[#040A14] border border-[#1C1C1D] rounded-xl p-3 hover:border-[#00c072] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={token.icon}
            alt={token.tokenAddress}
            className="w-8 h-8 rounded-full bg-white/5 p-[2px] border border-[#1C1C1D]"
            onError={(e) => {
              (e.target).src = "/coin.png";
            }}
          />
          <div className="flex flex-col">
            <span className="font-bold text-white truncate max-w-[120px]">
              {token.description?.slice(0, 20) || "Unknown Token"}
            </span>
            <span className="text-[10px] text-[#7A7A7B] truncate max-w-[120px]">
              {token.tokenAddress?.slice(0, 6)}...{token.tokenAddress?.slice(-4)}
            </span>
          </div>
        </div>
        <FaExternalLinkAlt className="text-[#7A7A7B] text-xs opacity-70" />
      </div>
    </a>
  );

  if (loading) {
    return (
      <div className="w-full mx-auto p-6">
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <h3 className="text-white text-lg font-semibold">Trending Solana Memecoins</h3>
            <p className="text-[#7A7A7B] text-sm">The hottest memecoin tokens on Solana</p>
          </div>
          <div className="flex items-center justify-center h-[150px]">
            <div className="animate-pulse flex space-x-2">
              <div className="h-3 w-3 bg-white rounded-full"></div>
              <div className="h-3 w-3 bg-white rounded-full"></div>
              <div className="h-3 w-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full mx-auto p-6">
        <div className="text-center">
          <h3 className="text-white text-lg font-semibold">Trending Solana Memecoins</h3>
          <p className="text-red-500 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto py-6">
      <div className="flex flex-col">
        <div className="text-center mb-4">
          <h3 className="text-white text-lg font-semibold">Trending Solana Memecoins</h3>
          <p className="text-[#7A7A7B] text-sm">Real-time data from DEX Screener</p>
        </div>
        
        <div className="relative overflow-hidden w-full">
          {/* Left fade effect */}
          <div className="absolute left-0 top-0 w-16 h-full z-10 bg-gradient-to-r from-[#000713] to-transparent pointer-events-none"></div>
          
          {/* Right fade effect */}
          <div className="absolute right-0 top-0 w-16 h-full z-10 bg-gradient-to-l from-[#000713] to-transparent pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div className="flex items-center space-x-4 py-2 overflow-x-auto hide-scrollbar">
            {tokens.length > 0 ? (
              tokens.map((token, idx) => (
                <TokenCard token={token} idx={idx} key={idx} />
              ))
            ) : (
              <div className="text-center w-full text-[#7A7A7B]">No tokens found</div>
            )}
          </div>
        </div>
      </div>
      
      {/* Custom styles for hiding scrollbar but keeping functionality */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default DexChart;
