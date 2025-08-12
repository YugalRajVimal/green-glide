import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Radhika Saini",
    image: "/images/radhika.jpg",
    rating: 5,
    text: "I am using my TATA Nexon for last 6 months now. I had recently find a Charging Station by Zeway Mobility at my office building at Noida Sector-2. This is very convenient to charge my vehicle because I can utilize my time while working at office.",
  },
  {
    name: "Amit Verma",
    image: "/images/amit.jpg",
    rating: 4,
    text: "EV charging has become super easy with Zeway Mobility's services. I save a lot of time, and the charging stations are always clean and well-maintained.",
  },
  {
    name: "Neha Kapoor",
    image: "/images/neha.jpg",
    rating: 5,
    text: "Riding my EV scooter daily is a joy! The charging network is reliable and fast, making my commute hassle-free.",
  },
];

const TestimonialSwiper = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
          <span className="text-green-500">Clients</span>
          <span className="text-gray-900">Testimonials</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="p-16">
              <div className="flex flex-col items-center text-center md:text-left">
                {/* Rating */}
                <div className="flex text-yellow-400 mb-4">
                  {Array.from({ length: t.rating }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.21 3.72a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.297a1 1 0 00-.364 1.118l1.21 3.72c.3.921-.755 1.688-1.54 1.118l-3.158-2.297a1 1 0 00-1.176 0l-3.158 2.297c-.784.57-1.838-.197-1.539-1.118l1.21-3.72a1 1 0 00-.364-1.118L2.296 9.147c-.783-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.21-3.72z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">{t.text}</p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="font-semibold text-gray-900">{t.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSwiper;
