"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, BarChart3, Monitor, Scale, Timer, TrendingUp } from "lucide-react";

const advantages = [
  {
    icon: Rocket,
    title: "Fast Funding Process",
    description: "Get funded quickly after passing your challenge with our streamlined evaluation process."
  },
  {
    icon: BarChart3,
    title: "Up to 90% Profit Share",
    description: "Earn up to 90% of your trading profits with our industry-leading profit split structure."
  },
  {
    icon: Monitor,
    title: "Advanced Trading Platforms",
    description: "Trade on professional platforms with real-time data, advanced charting tools, and superior execution."
  },
  {
    icon: Scale,
    title: "Realistic Trading Conditions",
    description: "Experience real market conditions with tight spreads, low commissions, and high-quality execution."
  },
  {
    icon: Timer,
    title: "24/7 Trader Support",
    description: "Our dedicated team is available around the clock to help you succeed on your trading journey."
  },
  {
    icon: TrendingUp,
    title: "Scaling Opportunities",
    description: "Start with $10,000 and scale up to $200,000+ as you demonstrate consistent profitability."
  }
];

const Features = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const titleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="relative">
      {/* Background decorations */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* <motion.h2 
          variants={titleVariant}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500"
        >
          Why Trade With FundedBase
        </motion.h2> */}
       
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="flex flex-col h-full"
            >
              <motion.div 
                className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 shadow-lg flex-1 flex flex-col"
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                  borderColor: "rgba(16, 185, 129, 0.4)"
                }}
              >
                <div className="flex items-center mb-4">
                  {advantage.icon && (
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="text-emerald-400"
                      >
                        {React.createElement(advantage.icon, { size: 22, strokeWidth: 2.5 })}
                      </motion.div>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-emerald-300">{advantage.title}</h3>
                </div>
                <p className="text-emerald-50/80 text-sm leading-relaxed">{advantage.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {/* <motion.a
            href="#buy-challenge"
            className="inline-block px-10 py-4 rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-600 text-emerald-950 font-bold text-lg shadow-lg border border-emerald-400 hover:from-emerald-500 hover:to-emerald-700 transition-all duration-200 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Get Funded Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 blur-md transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;