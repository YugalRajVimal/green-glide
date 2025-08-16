import React from "react";
import { Building2, Zap, CreditCard, Archive } from "lucide-react";

const WhyChooseGreenGlide = () => {
  const features = [
    {
      icon: <Building2 className="w-8 h-8 text-[#0F172A]" />,
      title: "Tailored for Corporates and Institutions",
      description:
        "Green Glide provides flexible rental plans for corporates, small and medium enterprises (SMEs), public sector units (PSUs), government bodies, and universities. Whether you're looking to optimize last-mile connectivity or provide sustainable transport for employees, our plans cater to your needs.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#0F172A]" />,
      title: "Eco-friendly Mobility",
      description:
        "Make a positive impact on the environment with our zero-emission e-vehicles. By choosing Green Glide's eco-friendly E-scooter rental services, you're contributing to a greener and cleaner future.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#0F172A]" />,
      title: "Cost-effective and Hassle-free",
      description:
        "We make sure that you get the best value without compromising quality. With low maintenance costs and energy-efficient designs, our e-scooters offer significant savings for your organization.",
    },
    {
      icon: <Archive className="w-8 h-8 text-[#0F172A]" />,
      title: "Reliable and Easy to Hire",
      description:
        "It's never been easier to hire e-scooters for your business or institution. Our streamlined process ensures quick onboarding, flexible hiring terms, and full support, including charging stations and servicing.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold font-serif">
          <span className="text-green-500">Why Choose </span>
          <span className="text-[#0F172A]">Green Glide</span>{" "}
          <span className="text-[#0F172A]">for E-Scooter Rentals?</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-white shadow-md rounded-full p-4 flex items-center justify-center">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseGreenGlide;
