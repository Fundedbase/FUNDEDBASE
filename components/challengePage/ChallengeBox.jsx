"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const accountSizes = [
    { label: "$10,000", value: 10000 },
    { label: "$25,000", value: 25000 },
    { label: "$50,000", value: 50000 },
];

const challengeData = {
    10000: {
        fee: "$149",
        profitTarget: "8%",
        maxDailyLoss: "3%",
        maxOverallLoss: "5%",
        platform: "Binance",
        leverage: "1:3",
        profitSplit: "Up to 90%",
        tradingPeriod: "Unlimited",
        weekendTrading: true,
    },
    25000: {
        fee: "$299",
        profitTarget: "8%",
        maxDailyLoss: "3%",
        maxOverallLoss: "5%",
        platform: "Binance",
        leverage: "1:3",
        profitSplit: "Up to 90%",
        tradingPeriod: "Unlimited",
        weekendTrading: true,
    },
    50000: {
        fee: "$599",
        profitTarget: "8%",
        maxDailyLoss: "3%",
        maxOverallLoss: "5%",
        platform: "Binance",
        leverage: "1:3",
        profitSplit: "Up to 90%",
        tradingPeriod: "Unlimited",
        weekendTrading: true,
    },
};



const ChallengeBox = () => {
    const router = useRouter();
    const [selected, setSelected] = useState(2); // Default to $50,000
    const [isLoaded, setIsLoaded] = useState(false);
    const selectedValue = accountSizes[selected].value;
    const selectedChallenge = challengeData[selectedValue];

    useEffect(() => {
        // Add initial animation when component mounts
        setIsLoaded(true);
    }, []);

    const handleStartChallenge = () => {
        // Navigate to checkout page with the selected fee (without the $ sign)
        const fee = selectedChallenge.fee.replace('$', '');
        router.push(`/checkout?amount=${fee}`);
    };

    // Animation variants for various elements
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const slideUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    const staggeredContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const staggeredItem = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>
            
            <motion.div 
                className="relative w-fit mb-6 text-center mx-auto"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
            >
                {/* Blured BG layer with animation */}
                <h1 className="absolute text-center top-0 left-0 geist font-semibold text-4xl md:text-6xl leading-[100%] max-w-[754px] text-emerald-200 opacity-50 blur-[8px] pointer-events-none select-none">
                    Pick Your <span className="text-emerald-400">Challenge</span>
                </h1>
                {/* Main Title with shimmer effect */}
                <h1 className="text-center geist font-semibold text-4xl md:text-6xl leading-[100%] max-w-[754px] overflow-hidden">
                    Pick Your{" "}
                    <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 bg-clip-text text-transparent bg-size-200 animate-shimmer">
                        Challenge
                    </span>
                </h1>
            </motion.div>

            <motion.div 
                className="text-center mb-12"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
            >
                <p className="text-emerald-50/70 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
                    Pick your account size, take on our exciting challenge, conquer it, and get funded to trade like a pro!
                </p>
            </motion.div>

            {/* Challenge Card */}
            <motion.div 
                className="max-w-3xl w-full mx-auto rounded-xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-3 sm:p-6 md:p-10 shadow-2xl backdrop-blur-sm border border-emerald-900/20 mb-8 sm:mb-12"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={scaleIn}
                transition={{ delay: 0.3 }}
            >
                {/* Redesigned Slider */}
                <div className="w-full flex flex-col items-center mb-8 sm:mb-12">
                    <div className="relative w-full max-w-xs sm:max-w-md mx-auto mb-6 sm:mb-8">
                        {/* Slider Track Line */}
                        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 sm:h-1 bg-emerald-900/40 rounded-full"></div>
                        
                        {/* Active Slider Line */}
                        <div 
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 sm:h-1 bg-emerald-400 rounded-full"
                            style={{
                                width: `${selected * 50}%`,
                                transition: 'width 0.3s ease'
                            }}
                        ></div>
                        
                        {/* Slider Dots */}
                        <div className="relative flex justify-between w-full">
                            {accountSizes.map((size, idx) => (
                                <motion.div
                                    key={size.value}
                                    className="cursor-pointer relative z-10"
                                    onClick={() => setSelected(idx)}
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <motion.div
                                        className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            selected === idx
                                                ? "bg-emerald-400"
                                                : "bg-emerald-900 hover:bg-emerald-700"
                                        }`}
                                        animate={selected === idx ? { scale: [1, 1.2, 1] } : {}}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${selected === idx ? "bg-emerald-950" : "bg-emerald-400"}`}></div>
                                    </motion.div>
                                    
                                    {selected === idx && (
                                        <motion.div
                                            className="absolute -inset-2 sm:-inset-3 rounded-full "
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.5 }}
                                        ></motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                        
                        <input
                            type="range"
                            min={0}
                            max={accountSizes.length - 1}
                            value={selected}
                            onChange={e => setSelected(Number(e.target.value))}
                            className="absolute top-0 opacity-0 w-full h-6 sm:h-8 cursor-pointer"
                        />
                    </div>

                    <div className="flex justify-between w-full max-w-xs sm:max-w-md mx-auto">
                        {accountSizes.map((size, idx) => (
                            <motion.div
                                key={size.value}
                                className={`text-xs sm:text-base md:text-lg font-bold transition-all duration-300 cursor-pointer ${
                                    selected === idx
                                        ? "text-emerald-400"
                                        : "text-emerald-50/60 hover:text-emerald-50/80"
                                }`}
                                onClick={() => setSelected(idx)}
                                whileHover={{ y: -2 }}
                                animate={selected === idx ? 
                                    { scale: 1.1, y: -3 } : 
                                    { scale: 1, y: 0 }
                                }
                                transition={{ duration: 0.3 }}
                            >
                                {size.label}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Challenge Box */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={selectedValue}
                        className="w-full bg-gradient-to-br from-white/10 to-transparent rounded-lg sm:rounded-2xl p-3 sm:p-4 md:p-8 flex flex-col gap-4 sm:gap-6 shadow-lg shadow-emerald-400/5 border border-white/10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-emerald-50 py-2 sm:py-4 px-2 text-center font-bold text-base sm:text-lg md:text-xl tracking-wide rounded-lg sm:rounded-xl shadow-lg"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                        >
                            Challenge Details
                        </motion.div>

                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 px-2 sm:px-4"
                            variants={staggeredContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            {Object.entries({
                                "Account Size": accountSizes[selected].label,
                                "One-Time Fee": selectedChallenge.fee,
                                "Profit Target": selectedChallenge.profitTarget,
                                "Max Daily Drawdown": selectedChallenge.maxDailyLoss,
                                "Max Drawdown": selectedChallenge.maxOverallLoss,
                                "Platform": selectedChallenge.platform,
                                "Leverage": selectedChallenge.leverage,
                                "Profit Split": selectedChallenge.profitSplit,
                                "Trading Period": selectedChallenge.tradingPeriod,
                                "Weekend Trading": selectedChallenge.weekendTrading ? "✔" : "–"
                            }).map(([key, value], idx) => (
                                <motion.div 
                                    key={key}
                                    className="flex justify-between text-left text-xs sm:text-base text-emerald-50/90 border-b border-emerald-500/10 pb-1 sm:pb-2"
                                    variants={staggeredItem}
                                    whileHover={{ x: 2, color: "rgba(52, 211, 153, 0.9)" }}
                                >
                                    <span>{key}</span>
                                    <span className="font-semibold">{value}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Button */}
                <div className="w-full flex justify-center mt-6 sm:mt-8">
                    <motion.button 
                        className="w-full max-w-xs sm:max-w-lg py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-600 text-emerald-950 font-bold text-base sm:text-lg shadow-lg border border-emerald-400 hover:from-emerald-500 hover:to-emerald-700 transition-all duration-200 relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleStartChallenge}
                    >
                        <span className="relative z-10">Start Challenge</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 blur-md transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};


export default ChallengeBox;