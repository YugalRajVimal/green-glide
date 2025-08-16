import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "GreenGlide transformed our outdated packaging into a fully eco-friendly solution. Not only did our environmental footprint shrink, but customer appreciation soared.",
    name: "Neha Patel",
    role: "Sustainability Lead, FreshGro Foods",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    text: "Working with GreenGlide was the easiest decision we made this year. Their team streamlined our operations and helped us reach our net-zero targets ahead of schedule.",
    name: "Rohan Mehta",
    role: "Operations Director, EcoRide Mobility",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
  {
    text: "From concept to execution, GreenGlide brought our sustainable home project to life with precision and creativity. We couldn’t be happier with the results.",
    name: "Priya Rao",
    role: "Founder, Verde Living",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
  },
  {
    text: "GreenGlide’s expertise in eco-branding elevated our market presence. Our new identity resonates perfectly with environmentally conscious customers.",
    name: "Amit Jain",
    role: "CEO, PureLeaf Organics",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
  },
  {
    text: "They didn’t just deliver a service; they built a partnership rooted in our shared passion for sustainability.",
    name: "Sonia Singh",
    role: "Marketing Head, SolarNest",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  return (
    <div
      className="bg-white py-12 flex flex-col items-center"
      style={{ backgroundImage: `url("/testimonialBG.webp")` }}
    >
      {/* Heading */}
      <div className="text-center mb-6">
        <p className="text-green-600 text-xs font-semibold tracking-widest">
          ● <span className="text-black text-sm font-serif">TESTIMONIALS</span>
        </p>
        <h2 className="text-3xl font-bold text-gray-900 font-serif">
          What Our Clients Say About GreenGlide
        </h2>
      </div>

      {/* Swiper Slider */}
      <div className="relative max-w-6xl w-full px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="px-4 mb:px-20 pb-10">
              <div className="flex flex-col items-center text-center">
                <FaQuoteLeft className="text-green-200 text-6xl mb-4" />
                <p className="text-lg text-gray-700 mb-4 italic">
                  “{testimonial.text}”
                </p>
                <div className="flex text-yellow-400 mb-4">
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-left">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-green-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev">
            <FaArrowLeft className="text-black" />
          </div>
          <div className="swiper-button-next">
            <FaArrowRight className="text-black" />
          </div>
        </Swiper>
      </div>

      {/* Logos Section */}
      {/* <div className="flex flex-wrap justify-center gap-10 mt-12 opacity-70">
        <span className="text-2xl font-light">EcoRide</span>
        <span className="text-2xl font-light">PureLeaf</span>
        <span className="text-2xl font-light">VerdeLiving</span>
        <span className="text-2xl font-light">SolarNest</span>
        <span className="text-2xl font-light">FreshGro</span>
        <span className="text-2xl font-light">GreenBuild</span>
      </div> */}
    </div>
  );
}
