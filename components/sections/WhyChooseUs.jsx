import { FaBitcoin, FaRocket, FaClock, FaCoins, FaBolt, FaChartLine } from "react-icons/fa";
import { GetFundedCTA } from "@/components";
import { images } from "@/constants";
import Image from "next/image";
import Tag from "@/components/Tag";
import { FaStar, FaRegStar, FaThumbsUp, FaRegThumbsDown, FaCheck } from "react-icons/fa";
import { BiComment } from "react-icons/bi";

const benefits = [
  {
    icon: <FaBitcoin className="w-8 h-8" />,
    title: "Crypto-focused Only",
    description: "Trade digital assets with confidence on our specialized crypto trading platform"
  },
  {
    icon: <FaBolt className="w-8 h-8" />,
    title: "Fast Payouts",
    description: "Receive your profits quickly and efficiently through our streamlined payout system"
  },
  {
    icon: <FaClock className="w-8 h-8" />,
    title: "No Time Limit",
    description: "Trade at your own pace with our unlimited time challenge structure"
  },
  {
    icon: <FaCoins className="w-8 h-8" />,
    title: "Memecoin-friendly",
    description: "Capitalize on memecoin opportunities with our flexible trading conditions"
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "High Profit Split",
    description: "Keep up to 90% of your profits with our industry-leading profit sharing model"
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Instant Funding",
    description: "Get funded immediately after passing your challenge, no delays"
  }
];

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Paul G.",
    initials: "PG",
    rating: 5,
    date: "3 days ago",
    title: "Thanks FundedBase and team for kind...",
    review: "Thanks FundedBase and team for kind support ad available for me to response it on time I have everything was very great and super easy for",
    experience: "April 21, 2024",
    verified: true
  },
  {
    id: 2,
    name: "Sarah M.",
    initials: "SM",
    rating: 5,
    date: "1 week ago",
    title: "Amazingly smooth experience!",
    review: "The trading challenge was straightforward and their support team was there every step of the way. After passing, I received funding within 24 hours!",
    experience: "March 18, 2024",
    verified: true
  },
  {
    id: 3,
    name: "John D.",
    initials: "JD",
    rating: 5,
    date: "2 weeks ago",
    title: "Best prop firm for crypto trading",
    review: "I've tried several prop firms but FundedBase truly understands crypto trading. The ability to trade memecoins with no time restrictions makes a huge difference.",
    experience: "March 5, 2024",
    verified: true
  },
  {
    id: 4,
    name: "Alex T.",
    initials: "AT",
    rating: 4,
    date: "1 month ago",
    title: "Great platform, quick payouts",
    review: "The challenge was reasonable and I was able to pass within 2 weeks. Profit splits are competitive and their payout system is fast and reliable.",
    experience: "February 10, 2024",
    verified: true
  },
  {
    id: 5,
    name: "Maria C.",
    initials: "MC",
    rating: 5,
    date: "1 month ago",
    title: "Excellent customer service",
    review: "Their support team went above and beyond to help me understand the rules. The platform is intuitive and the funding process was smooth.",
    experience: "February 3, 2024",
    verified: true
  }
];

const BenefitCard = ({ icon, title, description }) => (
  <div className="benefit-card relative p-6 rounded-xl backdrop-blur-sm border border-[#1C1C1D] bg-[#040A14C7] hover:border-[#00c072] transition-all duration-300 group">
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#33f5a6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="text-emerald-400 mb-4 transform transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-emerald-50/70 text-sm">{description}</p>
    </div>
  </div>
);

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-[280px] sm:w-[320px] md:w-[350px]">
      <div className="flex items-start mb-2">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f2e9c0] flex items-center justify-center text-sm sm:text-base font-bold">
          {testimonial.initials}
        </div>
        <div className="ml-2 sm:ml-3">
          <div className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <span>{testimonial.rating} star review</span>
            {testimonial.verified && (
              <span className="flex items-center ml-2">
                <FaCheck className="text-gray-500 mr-1 text-xs" /> Verified
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-1 sm:mb-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-[#00c072] mr-[2px] text-xs sm:text-sm" />
          ))}
        </div>
        <span className="text-xs sm:text-sm text-gray-500">{testimonial.date}</span>
      </div>

      <h3 className="font-bold text-gray-900 mb-1 text-[12px] md:text-base">{testimonial.title}</h3>
      <p className="text-gray-700 text-xs md:text-sm mb-2 line-clamp-2">{testimonial.review}</p>

      <div className="text-xs sm:text-sm text-gray-500 mb-3 border-b border-gray-200 pb-3">
        Date of experience: {testimonial.experience}
      </div>

      <div className="flex items-center text-xs sm:text-sm">
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <FaThumbsUp className="mr-1 text-xs" /> Useful
        </button>
        <button className="ml-2 text-gray-500 hover:text-gray-700">
          <FaRegThumbsDown className="text-xs" />
        </button>
        <button className="ml-auto text-gray-400">
          <BiComment className="text-xs sm:text-sm" />
        </button>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <Tag text="Why Choose Us" />
        <h2 className="text-[30px] lg:text-[40px] leading-[100%] font-bold text-white mb-4">
          Unique Benefits
        </h2>
        <p className="text-emerald-50/70 max-w-[90%] md:max-w-2xl mx-auto">
          Trade smarter with FundedBase, where technology meets trader-friendly conditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 mb-14">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>

      <div className="mt-14 mb-12">
        <h2 className="font-semibold text-[30px] lg:text-[40px] leading-[100%] px-2 mb-6 text-center mx-auto text-white">
          Trader Reviews
        </h2>
        <p className="text-emerald-50/70 max-w-[90%] md:max-w-2xl mx-auto text-center mb-10">
          See what our community of traders has to say about their experience with FundedBase
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-10 sm:w-20 z-10 pointer-events-none bg-gradient-to-r from-[#000713] to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-10 sm:w-20 z-10 pointer-events-none bg-gradient-to-l from-[#000713] to-transparent"></div>

        <div className="marquee flex items-center gap-3 sm:gap-6 w-max animate-scroll px-2 sm:px-4 py-4 sm:py-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
          {/* Duplicate testimonials for continuous scrolling effect */}
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`dup-${testimonial.id}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <GetFundedCTA />
    </section>
  );
};

export default WhyChooseUs; 