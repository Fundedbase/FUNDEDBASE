import {
  Hero,
  Challenges,
  TradingPlatforms,
  EvaluationProcess,
  FlexiblePayouts,
  Dashboard,
} from "@/containers";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Work from "@/components/Work";
import JsonLd from "./components/JsonLd";

export const metadata = {
  title: "FundedBase - Empowering Cryptocurrency Traders Worldwide",
  description: "FundedBase provides cryptocurrency traders with access to funded accounts and professional trading opportunities. Join our community and start trading today.",
  alternates: {
    canonical: "/",
  }
};

export default function Home() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FundedBase",
    "url": "https://fundedbase.com",
    "logo": "/logo.jpeg",
    "description": "FundedBase provides cryptocurrency traders with access to funded accounts and professional trading opportunities.",
    "sameAs": [
      "https://twitter.com/fundedbase",
      "https://facebook.com/fundedbase",
      "https://instagram.com/fundedbase"
    ]
  };

  return (
    <>
      <JsonLd data={organizationData} />
      <Hero />
      
      {/* How It Works Section */}
      <Work/>

      {/* Why Fundedbase */}
      <WhyChooseUs />


     
      {/* <Challenges />
      <TradingPlatforms />
      <EvaluationProcess />
      <FlexiblePayouts /> */}



      {/* Celebrate Every win */}
      {/* <div className="mt-[5.5rem] lg:mt-[11.26rem]">
        <h1 className="geist font-semibold text-[30px] lg:text-[40px] leading-[100%] px-2 mb-5 text-center mx-auto text-white">
          Celebrate Every Win
        </h1>
        <h1 className="geist font-medium text-[14px] leading-[100%] max-w-[754px] text-center mb-3 mx-auto text-[#7A7A7B]">
          and unlock access to a funded account
        </h1>
      </div>
      <br />
      <div className="overflow-hidden relative ">
        <div className="marquee flex items-center gap-10 w-max">
          {data.certifications.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt={"certificate" + index + 1}
              width={301}
              height={301}
              className="w-[301px] h-[301px] object-cover"
            />
          ))}
        </div>
      </div> */}

      {/* <Dashboard /> */}

      {/* HEAR FROM OUR TRADERS */}
      {/* <div className="overflow-hidden relative my-[11.255rem]">
        <div className="marquee flex items-center gap-10 w-max">
          {data.testimonials.map((item, index) => (
            <div key={index} className="w-[400px] h-[300px] bg-white">
              <Image
                src={item}
                alt={"testimonial" + index + 1}
                width={300}
                height={400}
                className="w-[300px] h-[400px] object-contain"
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* <JoinCommunityCTA /> */}
    </>
  );
}
