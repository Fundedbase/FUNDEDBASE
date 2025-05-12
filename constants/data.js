import { videos, icons, images } from "@/constants";

const menu_links = [
  {
    label: "Challenges",
    url: "challenges",
  },
  {
    label: "Rules",
    url: "rules",
  },
  {
    label: "About Us",
    url: "aboutus",
  },
  // {
  //   label: "Blog",
  //   url: "#",
  // },
];

const def_links = {
  challenges: "challenges",
  get_funded: "challenges",
  // discord: "#",
};

const evaluation_process = [
  {
    video: videos.eval1,
    tag: "Evaluation",
    title: "Noob Arena",
    desc: "Prove your trading skills in a low-pressure environment. Hit an 8% profit target—no rush, no rigid deadlines, just you mastering the markets.",
  },
  {
    video: videos.eval2,
    tag: "Challenge",
    title: "OGs Arena",
    desc: "Time to level up. Stay consistent, navigate market swings, and hit a 5% profit target to prove you're ready for the big leagues.",
  },
  {
    video: videos.eval3,
    tag: "Funded Account",
    title: "Degens Arena",
    desc: "You did it! Trade with our capital, keep 90% of the profits, and enjoy the freedom to execute your strategies without limitations.",
  },
];

const flexible_payouts = [
  {
    icon: icons.banktransfer,
    title: "Bank Transfers",
    desc: "Direct deposits to your bank account, simple and reliable.",
  },
  {
    icon: icons.cryptowallet,
    title: "Crypto Wallets",
    desc: "Choose popular tokens like BTC or ETH for quick, global access.",
  },
  {
    icon: icons.localcurrencysupport,
    title: "Local Currency Support",
    desc: "For select regions, withdraw in your local currency for added ease.",
  },
];

const why_choose_us = [
  images.benefit1,
  images.benefit2,
  images.benefit3,
  images.benefit4,
  images.benefit5,
  images.benefit6,
];

const certifications = [
  images.cert1,
  images.cert2,
  images.cert3,
  images.cert4,
  images.cert5,
  images.cert6,
  images.cert7,
  images.cert8,
  images.cert9,
  images.cert10,
  images.cert11,
  images.cert12,
];

const testimonials = [
  images.testimonial1,
  images.testimonial2,
  images.testimonial3,
  images.testimonial4,
  images.testimonial5,
  images.testimonial6,
  images.testimonial7,
  images.testimonial8,
  images.testimonial9,
  images.testimonial10,
  images.testimonial11,
  images.testimonial12,
  images.testimonial13,
];

const footer_links = {
  usefulLinks: [
    {
      label: "Challenges",
      url: "challenges",
    },
    {
      label: "FAQs",
      url: "faq",
    },
    {
      label: "About Us",
      url: "aboutus",
    },
    // {
    //   label: "Blog",
    //   url: "#",
    // },
  ],

  legal: [
    {
      label: "Terms & Conditions",
      url: "#",
    },
    {
      label: "Privacy Policy",
      url: "#",
    },
    {
      label: "Rules",
      url: "rules",
    },
  ],

  socials: [
    {
      icon_url: icons.smalldiscord,
      url: "#",
    },
    {
      icon_url: icons.ig,
      url: "#",
    },
    {
      icon_url: icons.x,
      url: "#",
    },
    {
      icon_url: icons.youtube,
      url: "#",
    },
  ],
};

const price_list = [
  {
    label: "$10,000",
    val: 10000,
  },
  {
    label: "$25,000",
    val: 25000,
  },
  {
    label: "$50,000",
    val: 50000,
  },
];

const qr_data = {
  img: images.qr,
  code: "12B1UHinAxijkF5Et8qdju2juN3mST2zeToBxjRYwkLr",
};

export default {
  menu_links,
  def_links,
  evaluation_process,
  flexible_payouts,
  why_choose_us,
  certifications,
  testimonials,
  footer_links,
  price_list,
  qr_data,
};
