// TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Rhett Kinedy",
    role: "HEAD OF MARKETING",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    comment:
      "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Trydus Co. not only revitalized our brand, but saved our nearly 100-year-old family business",
  },
  {
    name: "Richard Powers",
    role: "CEO CO-FOUNDER",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    comment:
      "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Trydus Co. not only revitalized our brand, but saved our nearly 100-year-old family business",
  },
  {
    name: "Maria Rusconi",
    role: "MANAGING DIRECTOR",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    comment:
      "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Trydus Co. not only revitalized our brand, but saved our nearly 100-year-old family business",
  },
  {
    name: "Rhett Kinedy",
    role: "HEAD OF MARKETING",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    comment:
      "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Trydus Co. not only revitalized our brand, but saved our nearly 100-year-old family business",
  },
  {
    name: "Richard Powers",
    role: "CEO CO-FOUNDER",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    comment:
      "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Trydus Co. not only revitalized our brand, but saved our nearly 100-year-old family business",
  },
  {
    name: "Maria Rusconi",
    role: "MANAGING DIRECTOR",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    comment:
      "After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Trydus Co. not only revitalized our brand, but saved our nearly 100-year-old family business",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="bg-[#f2f7f5] pt-16 pb-36 px-4">
      <div className="text-center mb-12">
        <p className="text-green-500 text-sm font-semibold tracking-wider uppercase">
          ● Our Customer Say
        </p>
        <h2 className="text-3xl font-bold mt-2">
          Here are some of our most valuable comments.
        </h2>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000, // Auto slide every 3s
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-lg my-10 px-8 py-16 mx-8 flex flex-col justify-center items-center gap-4 relative">
              {/* Quote icon */}
              <div className="flex justify-center">
                <div className="bg-green-500 p-3 rounded-full shadow-lg">
                  <span className="text-white text-2xl">❝</span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6 text-center">
                <h3 className="font-bold text-lg">{t.name}</h3>
                <p className="text-green-500 font-semibold text-sm uppercase">
                  {t.role}
                </p>
                <p className="mt-4 text-gray-600 italic">{t.comment}</p>
              </div>

              {/* Image */}
              <div>
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
 