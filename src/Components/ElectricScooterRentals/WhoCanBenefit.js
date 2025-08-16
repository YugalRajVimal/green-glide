import React from "react";

const BenefitSection = ({
  bgColor = "bg-white",
  title,
  subtitle,
  description,
  buttonText,
  image,
  imagePosition = "left",
}) => {
  return (
    <section className={`${bgColor} py-16 px-10`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-5">
        {/* Image */}
        {imagePosition === "left" && (
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className=" shadow-lg md:w-2/3 object-cover rounded-tl-3xl rounded-br-3xl"
            />
          </div>
        )}

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-light mb-4 font-serif">
            <span
              className={`${
                bgColor === "bg-green-500" ? "text-white" : "text-green-500"
              }`}
            >
              {title}{" "}
            </span>
            <span className="font-bold text-gray-900">{subtitle}</span>
          </h3>
          <p
            className={`text-gray-700 leading-relaxed ${
              bgColor === "bg-green-500" ? "text-white" : "text-gray-700"
            }`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {/* <button className="mt-6 bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 shadow-md transition">
            {buttonText}
          </button> */}
        </div>

        {/* Image Right */}
        {imagePosition === "right" && (
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="rounded-tl-3xl rounded-br-3xl shadow-lg md:w-2/3 object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

// Example usage
const WhoCanBenefit = () => {
  return (
    <div className="">
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-semibold font-serif">
          <span className="text-green-500">Who Can</span>{" "}
          <span className="text-zinc-900">Benefit</span>{" "}
          <span className="text-green-500">?</span>
        </h1>
        <p className="mt-4 text-lg">
          Green Glide electric scooters are ideal for:
        </p>
      </div>

      <BenefitSection
        title="Corporates"
        subtitle="& SME's"
        description={`We offer affordable hiring solutions with hundreds of scooters readily available for your employees through customized models and rental schemes. Corporates and SMEs can decide to recruit e-bikes for their groups, adding to a greener planet by embracing our <strong>hire e-scooter</strong> solutions.<br/><br/>
        We are excited to partner with you, providing free test rides and consultations to deliver tailor-made green mobility solutions that suit your specific needs.`}
        buttonText="ENQUIRY NOW"
        image="ben1.jpg"
        imagePosition="left"
      />
      <BenefitSection
        bgColor="bg-green-500"
        title="PSU's"
        subtitle="& Government"
        description={`The Government of India is actively promoting alternative transportation methods to reduce the consumption of fossil fuels and encourage sustainable practices.<br/><br/>
        PSUs and government organizations can play a pivotal role in this initiative by contributing to environmental conservation and adopting <strong>hire e-scooter</strong> solutions. With Green Glide’s e-hiring schemes, they can undoubtedly progress to green mobility.<br/><br/>
        We offer <strong>specialized rental schemes</strong> and tailored plans specifically designed for government and PSU requirements, ensuring a seamless and sustainable transportation experience.`}
        buttonText="ENQUIRY NOW"
        image="ben2.jpg"
        imagePosition="right"
      />
      <BenefitSection
        title="Educational"
        subtitle="Institutions"
        description={`Educational institutions can take a significant step toward reducing their carbon footprint by declaring their campus a <strong>Green Mobility Campus</strong>.<br/><br/>
        Green Glide specializes in designing and developing <strong>sustainable e-mobility solutions</strong> tailored to the needs of your campus. As your dedicated mobility partner, we ensure our services are both cost-effective and value-driven.<br/><br/>
        With Green Glide, students and staff can <strong>hire e-scooters</strong> on a rental basis starting at just ₹99 per day*, promoting <strong>eco-friendly e-scooter rental</strong> options that align with sustainability goals.`}
        buttonText="ENQUIRY NOW"
        image="ben3.jpg"
        imagePosition="left"
      />
      <BenefitSection
        title="Societies"
        subtitle="& Apartments"
        description={`Residential societies and apartments spread across large areas can enhance their value by adopting <strong>green energy vehicles</strong>, reducing pollution and the consumption of carbon fuels.<br/><br/>
        Green Glide offers <strong>affordable electric scooter rental</strong> schemes designed specifically for residents, along with convenient charging stations and battery swapping facilities.<br/><br/>
        An association between Green Glide and RWAs or Society Welfare Associations can provide residents with access to a <strong>low-cost green mobility solution</strong>, fostering a cleaner and more sustainable living environment.`}
        buttonText="ENQUIRY NOW"
        image="ben4.jpg"
        imagePosition="right"
      />
    </div>
  );
};

export default WhoCanBenefit;
