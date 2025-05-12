"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  BarChart4, 
  Timer, 
  Calendar, 
  Ban, 
  DollarSign,
  Target, 
  Percent,
  TrendingDown,
  Coins
} from "lucide-react";
import solana from "@/assets/icons/solana.svg";
import Image from "next/image";

const RulesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Trading Rules
  const tradingRules = [
    {
      title: "Binance Only",
      description: "All trading must be conducted exclusively on the Binance platform",
      isAllowed: true,
      icon: CheckCircle,
    },
    {
      title: "Crypto Spot & Futures",
      description: "Trading is allowed for both spot cryptocurrencies and futures contracts",
      isAllowed: true,
      icon: CheckCircle,
    },
    {
      title: "Minimum Trading Days",
      description: "You must actively trade for at least 5 days before completing the challenge",
      isAllowed: true,
      icon: Calendar,
    },
    {
      title: "All Cryptocurrency Trading",
      description: "Trading of all cryptocurrencies including memecoins is permitted",
      isAllowed: true,
      icon: CheckCircle,
    },
    {
      title: "No Martingale Strategy",
      description: "Martingale strategies that increase position sizes after losses are prohibited",
      isAllowed: false,
      icon: Ban,
    },
    {
      title: "No Grid Bots",
      description: "Automated grid bot trading systems are not permitted during the challenge",
      isAllowed: false,
      icon: Ban,
    },
    {
      title: "No Copy Trading",
      description: "Copy trading or signal copying from external sources is strictly prohibited",
      isAllowed: false,
      icon: Ban,
    },
    {
      title: "Profit Target",
      description: "Reach an 8% profit target to successfully complete the challenge",
      isSpecial: true,
      icon: Target,
    },
    {
      title: "Maximum Daily Drawdown",
      description: "Daily losses must not exceed 3% of your account balance",
      isSpecial: true,
      icon: TrendingDown,
    },
    {
      title: "Maximum Overall Drawdown",
      description: "Total drawdown must remain below 5% of your initial balance",
      isSpecial: true,
      icon: Percent,
    }
  ];

  // Solana Memecoins Features
  const solanaMemecoinsFeatures = [
    "Trade high-potential Solana memecoins with your funded account",
    "Access to early listings before they go mainstream",
    "No restrictions on memecoin trading - capitalize on viral trends",
    "Full access to Jupiter & Raydium DEXes for Solana tokens",
    "Monitor trending Solana tokens through our integrated DEX Screener"
  ];

  // Funding Requirements
  const fundingRequirements = [
    {
      title: "Complete Challenge Phase",
      description: "Successfully reach the 8% profit target while following all trading rules"
    },
    {
      title: "Maintain Risk Management",
      description: "Stay within the maximum drawdown limits (3% daily, 5% overall)"
    },
    {
      title: "Trade Consistently",
      description: "Show consistent trading activity for at least 5 trading days"
    },
    {
      title: "Follow Trading Rules",
      description: "Adhere to all platform rules and restrictions throughout the challenge"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1120] to-[#0f1a2e] flex flex-col items-center pt-34 py-10 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            className="relative w-fit mx-auto mb-6"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            {/* Blurred BG layer */}
            <h1 className="absolute top-0 left-0 font-semibold text-4xl md:text-6xl leading-[100%] text-emerald-200 opacity-50 blur-[8px] pointer-events-none select-none">
              Trading <span className="text-emerald-400">Rules</span>
            </h1>
            {/* Main Title with shimmer effect */}
            <h1 className="relative font-semibold text-4xl md:text-6xl leading-[100%] overflow-hidden">
              Trading{" "}
              <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 bg-clip-text text-transparent bg-size-200 animate-shimmer">
                Rules
              </span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-emerald-50/70 max-w-lg mx-auto leading-relaxed  text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Follow these guidelines to successfully complete your trading challenge and get funded. Our clear, straightforward rules are designed to develop disciplined trading habits.
          </motion.p>
        </div>

        {/* Trading Rules Section */}
        <motion.div
          className="w-full mb-16"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500"
            variants={staggerItem}
          >
            Challenge Guidelines
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tradingRules.map((rule, index) => (
              <motion.div
                key={index}
                className={`rounded-xl p-6 flex flex-col h-full border ${
                  rule.isSpecial 
                    ? "bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border-emerald-600/30"
                    : rule.isAllowed 
                      ? "bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border-emerald-500/20" 
                      : "bg-gradient-to-br from-rose-900/30 to-rose-800/10 border-rose-500/20"
                } backdrop-blur-sm shadow-lg`}
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-full ${
                    rule.isSpecial 
                      ? "bg-emerald-500/20 text-emerald-300" 
                      : rule.isAllowed 
                        ? "bg-emerald-500/20 text-emerald-400" 
                        : "bg-rose-500/20 text-rose-400"
                  }`}>
                    {React.createElement(rule.icon, { size: 18 })}
                  </div>
                  <h3 className={`text-xl font-bold ${
                    rule.isSpecial 
                      ? "text-emerald-300" 
                      : rule.isAllowed 
                        ? "text-emerald-300" 
                        : "text-rose-300"
                  }`}>
                    {rule.title}
                  </h3>
                </div>
                <p className="text-emerald-50/80 text-sm leading-relaxed">{rule.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solana Memecoins Section */}
        <motion.div
          className="w-full mb-16"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delayChildren: 0.3 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500"
            variants={staggerItem}
          >
            Solana Memecoins
          </motion.h2>

          <motion.div 
            className="bg-gradient-to-br from-[#9945FF]/20 to-[#14F195]/20 backdrop-blur-sm border border-[#14F195]/30 rounded-xl p-8 shadow-lg overflow-hidden relative"
            variants={fadeIn}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/4 flex justify-center">
                <motion.div 
                  className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#9945FF]/30 to-[#14F195]/30 flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 rounded-full bg-[#14F195]/10 blur-xl"></div>
                  <div className="absolute w-full h-full rounded-full border-4 border-[#14F195]/20 animate-pulse"></div>
                  {/* <Coins size={48} className="text-[#14F195]" /> */}
                  <Image src={solana} alt="Solana" className="absolute w-16 h-32 rounded-full" />
                </motion.div>
              </div>
              
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold text-[#14F195] mb-4">Unlock Solana&apos;s Memecoin Potential</h3>
                <p className="text-emerald-50/80 text-base leading-relaxed mb-4">
                  Our platform specializes in Solana memecoin trading, giving you access to one of the most dynamic and 
                  profitable segments of the crypto market. With lower gas fees and faster transactions than Ethereum, 
                  Solana is ideal for capturing early memecoin opportunities.
                </p>
                
                <ul className="space-y-2">
                  {solanaMemecoinsFeatures.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-2"
                      variants={staggerItem}
                      custom={index}
                    >
                      <div className="text-[#14F195] mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span className="text-emerald-50/80 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <Link href="/challenge" className="mt-6 inline-block text-[#14F195] font-bold text-sm hover:underline">
                  Start trading Solana memecoins →
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Funding Requirements Section */}
        <motion.div
          className="w-full mb-16"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delayChildren: 0.4 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500"
            variants={staggerItem}
          >
            Funding Requirements
          </motion.h2>

          <motion.div 
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 shadow-lg"
            variants={staggerItem}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fundingRequirements.map((req, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  variants={staggerItem}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-emerald-300 mb-2">{req.title}</h3>
                    <p className="text-emerald-50/70 text-sm">{req.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Disclaimer Section */}
        <motion.div
          className="w-full mb-12 bg-gradient-to-br from-amber-900/30 to-amber-800/10 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-amber-500/20 text-amber-400 flex-shrink-0">
              <AlertTriangle size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-2">Important Note</h3>
              <p className="text-emerald-50/70 text-sm">
                Trading cryptocurrency involves substantial risk of loss and is not suitable for all investors. 
                Make sure you fully understand the risks involved and trade responsibly. 
                Past performance is not indicative of future results. The challenge is designed to identify disciplined traders 
                who can follow rules and manage risk effectively.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link href="/challenge">
            <motion.button 
              className="px-10 py-4 rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-600 text-emerald-950 font-bold text-lg shadow-lg border border-emerald-400 hover:from-emerald-500 hover:to-emerald-700 transition-all duration-200 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start Your Challenge</span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 blur-md transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default RulesPage; 