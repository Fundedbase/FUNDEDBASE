"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

// Client component that uses search params
function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const txid = searchParams.get("txid");

  return (
    <div className="w-full max-w-2xl">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="bg-gradient-to-br from-[#0D1926]/95 to-[#040A14]/95 border border-emerald-800/30 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="relative">
              <div className="absolute inset-0 text-emerald-500 opacity-50 blur-[10px]">
                <CheckCircle size={80} />
              </div>
              <CheckCircle size={80} className="text-emerald-400 relative z-10" />
            </div>
          </motion.div>
        </div>

        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-emerald-300 text-lg">
            Thank you for choosing FundedBase
          </p>
        </motion.div>

        {/* Payment Details */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#0a1523]/80 rounded-xl p-6 mb-8"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-emerald-50/70">Amount Paid:</span>
              <span className="text-2xl font-bold text-emerald-400">${amount}</span>
            </div>
            {txid && txid !== "manual-verification" && (
              <div className="flex flex-col gap-2">
                <span className="text-emerald-50/70">Transaction ID:</span>
                <span className="text-sm font-mono text-emerald-50/90 bg-[#061019] p-2 rounded-lg truncate">
                  {txid}
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-emerald-300 font-semibold mb-4">Next Steps</h2>
          <ul className="text-emerald-50/70 space-y-2 text-sm">
            <li>• We are verifying your payment</li>
            <li>• You will receive an email with your account details</li>
            <li>• Your challenge will start within 24 hours</li>
          </ul>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-emerald-950 font-semibold text-center hover:from-emerald-400 hover:to-emerald-500 transition-all duration-200 shadow-lg border border-emerald-400/50"
          >
            Return Home
          </Link>
          {/* <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-[#061019] text-emerald-400 font-semibold text-center hover:bg-[#0a1523] transition-colors border border-emerald-800/30"
          >
            Return Home
          </Link> */}
        </motion.div>
      </div>
    </div>
  );
}

// Loading fallback
function PaymentSuccessLoading() {
  return (
    <div className="w-full max-w-2xl flex items-center justify-center py-20">
      <div className="text-emerald-400 font-medium">Loading payment details...</div>
    </div>
  );
}

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1120] to-[#0f1a2e] flex flex-col items-center pt-34 py-10 px-4 overflow-hidden">
      {/* Success Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Suspense fallback={<PaymentSuccessLoading />}>
          <PaymentSuccessContent />
        </Suspense>
      </motion.div>

      {/* Support Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-emerald-50/50 text-sm mt-8 text-center"
      >
        Need help? Contact{" "}
        <a href="mailto:support@fundedbase.com" className="text-emerald-400 hover:underline">
          support@fundedbase.com
        </a>
      </motion.p>
    </div>
  );
}
