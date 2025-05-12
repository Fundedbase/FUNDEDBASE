"use client";

import { Suspense } from "react";

import { Loading, CheckoutPage } from "@/components";

const Checkout = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CheckoutPage />
      </Suspense>
    </>
  );
};

export default Checkout;
