"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  BarChart,
  Rocket,
  Globe,
  Mail,
  MessageCircle,
  Instagram,
  ArrowRight,
  Shield,
  Trophy,
  BadgeCheck
} from "lucide-react";
import Image from "next/image";
import logo from "@/assets/icons/navlogo.svg";
import JsonLd from "../components/JsonLd";

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Organization structured data
  const aboutPageData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About FundedBase",
    "description": "Learn about FundedBase, our mission to empower cryptocurrency traders worldwide, our team, and our core values."
  };

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

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  // Team Members
  const teamMembers = [
    {
      name: "Alex Morgan",
      position: "Founder & CEO",
      bio: "Experienced trader with over 10 years in cryptocurrency markets. Passionate about helping new traders achieve success.",
      image: "/team/founder.png"
    },
    {
      name: "Sarah Chen",
      position: "Head of Trading",
      bio: "Former institutional trader specializing in risk management and cryptocurrency technical analysis.",
      image: "/team/trading-head.png"
    },
    {
      name: "Michael Reeves",
      position: "Technical Director",
      bio: "Blockchain developer and trading platform architect with experience building secure financial systems.",
      image: "/team/tech-director.png"
    },
    {
      name: "Jessica Taylor",
      position: "Customer Success",
      bio: "Dedicated to providing exceptional support and ensuring every trader has the tools they need to succeed.",
      image: "/team/support-lead.png"
    }
  ];

  // Core Values
  const coreValues = [
    {
      title: "Trader Success First",
      description: "We believe in putting traders' success at the forefront of everything we do. Our success is measured by your achievements.",
      icon: Trophy
    },
    {
      title: "Transparency",
      description: "We maintain clear, honest communication about our rules, fees, and processes with no hidden costs or surprises.",
      icon: Shield
    },
    {
      title: "Innovation",
      description: "We continuously improve our platform and offerings to provide the best possible trading experience and opportunities.",
      icon: Rocket
    },
    {
      title: "Community",
      description: "We foster a supportive community where traders can grow together, share insights, and develop their skills.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1120] to-[#0f1a2e] flex flex-col items-center pt-34 py-10 px-4 overflow-hidden">
      <JsonLd data={aboutPageData} />
      {/* Background Decorations */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            className="relative w-fit mx-auto mb-6"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            {/* Blurred BG layer */}
            <h1 className="absolute top-0 left-0 font-semibold text-4xl md:text-6xl leading-[100%] text-emerald-200 opacity-50 blur-[8px] pointer-events-none select-none">
              About <span className="text-emerald-400">FundedBase</span>
            </h1>
            {/* Main Title with shimmer effect */}
            <h1 className="relative font-semibold text-4xl md:text-6xl leading-[100%] overflow-hidden">
              About{" "}
              <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 bg-clip-text text-transparent bg-size-200 animate-shimmer">
                FundedBase
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-emerald-50/70 max-w-2xl mx-auto leading-relaxed  text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We're on a mission to empower cryptocurrency traders worldwide with access to capital and professional trading opportunities.
          </motion.p>
        </div>

        {/* Our Vision Section */}
        <motion.div
          className="w-full mb-20"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500 text-center"
            variants={staggerItem}
          >
            Our Vision
          </motion.h2>

          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 shadow-lg"
            variants={fadeIn}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <motion.div
                  className="relative w-64 h-64 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl"></div>
                  <div className="absolute w-full h-full rounded-full border-4 border-emerald-500/20 animate-pulse"></div>
                  {/* <Globe size={80} className="text-emerald-400" /> */}
                  <Image
                    src={logo}
                    alt="Logo"
                    width={130}
                    height={30}
                    // className={className ? className : "w-[121px] md:w-auto mr-2  h-6 "}
                  />
                  {/* Green glow effect */}
                  <div className={`absolute inset-0 blur-[20px] bg-[#00FF9D]/20 -z-10 scale-100 opacity-100`}
                    style={{
                      background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 255, 157, 0.4) 0%, rgba(0, 255, 157, 0) 100%)'
                    }}
                  />
                </motion.div>
              </div>

              <div className="w-full md:w-2/3">
                <p className="text-emerald-50/80  text-sm md:text-base leading-relaxed mb-6">
                  At FundedBase, we envision a future where talented cryptocurrency traders, regardless of their background or initial capital, can access the resources they need to trade professionally and build successful careers.
                </p>
                <p className="text-emerald-50/80 text-sm md:text-base leading-relaxed mb-6">
                  We're building a platform that identifies, develops, and funds skilled traders, creating opportunities for financial growth and independence in the dynamic world of cryptocurrency trading.
                </p>
                <p className="text-emerald-50/70 text-sm md:text-base leading-relaxed">
                  Our goal is to become the leading crypto trader funding platform, known for our fair evaluation process, trader-centric approach, and commitment to long-term partnerships with our funded traders.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          className="w-full mb-20"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delayChildren: 0.2 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500 text-center"
            variants={staggerItem}
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="rounded-xl p-6 flex gap-4 h-full border bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border-emerald-500/20 backdrop-blur-sm shadow-lg"
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 h-fit">
                  {React.createElement(value.icon, { size: 24 })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-300 mb-2">{value.title}</h3>
                  <p className="text-emerald-50/80 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="w-full mb-20"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delayChildren: 0.3 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500 text-center"
            variants={staggerItem}
          >
            Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/20 shadow-lg group"
                variants={staggerItem}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48 bg-emerald-800/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] to-transparent opacity-70 z-10"></div>
                  <div className="absolute inset-0 bg-emerald-500/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <BadgeCheck size={64} className="text-emerald-400/30" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-300 mb-1">{member.name}</h3>
                  <p className="text-emerald-400/70 text-sm mb-3">{member.position}</p>
                  <p className="text-emerald-50/70 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact & Links Section */}
        <motion.div
          className="w-full mb-12"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delayChildren: 0.4 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500 text-center"
            variants={staggerItem}
          >
            Connect With Us
          </motion.h2>

          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 shadow-lg"
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.a
                href="https://instagram.com/fundedbase.official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 hover:from-emerald-800/40 hover:to-emerald-700/20 border border-emerald-500/20 transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Instagram size={32} className="text-emerald-400" />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-emerald-300 mb-1">Instagram</h3>
                  <p className="text-emerald-50/70 text-sm">Follow for updates and success stories</p>
                </div>
              </motion.a>

              <motion.a
                href="https://t.me/Fundedbasebot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 hover:from-emerald-800/40 hover:to-emerald-700/20 border border-emerald-500/20 transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <MessageCircle size={32} className="text-emerald-400" />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-emerald-300 mb-1">Telegram</h3>
                  <p className="text-emerald-50/70 text-sm">Join our trading community</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:support@fundedbase.com"
                className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 hover:from-emerald-800/40 hover:to-emerald-700/20 border border-emerald-500/20 transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Mail size={32} className="text-emerald-400" />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-emerald-300 mb-1">Email</h3>
                  <p className="text-emerald-50/70 text-sm">Get in touch with our team</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>



        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="/challenges">
            <motion.button
              className="px-10 py-4 rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-600 text-emerald-950 font-bold text-lg shadow-lg border border-emerald-400 hover:from-emerald-500 hover:to-emerald-700 transition-all duration-200 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                Start Trading Now <ArrowRight size={18} className="ml-2" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 blur-md transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage; 