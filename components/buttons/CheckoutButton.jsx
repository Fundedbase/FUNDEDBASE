import React from "react";

import Link from "next/link";

const CheckoutButton = ({ amount, text, className }) => {
  return (
    <Link
      id="getFundedLink"
      href={`/checkout?amount=${amount}`}
      className={className ? className : ""}
    >
      {text}
    </Link>
  );
};

export default CheckoutButton;
