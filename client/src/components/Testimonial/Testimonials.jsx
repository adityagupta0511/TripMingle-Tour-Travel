import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10">
        {/* Navigation Buttons */}
        <div className="flex not-only-of-type:justify-end py-5 gap-x-3">
          <button className="text-xl md:text-2xl custom-prev text-zinc-800 flex justify-center items-center rounded-lg w-9 h-9 md:w-11 md:h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-pink-400 hover:to-pink-500 hover:text-white cursor-pointer transition-all">
            <IoIosArrowBack />
          </button>
          <button className="text-xl md:text-2xl custom-next text-zinc-800 flex justify-center items-center rounded-lg w-9 h-9 md:w-11 md:h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-pink-400 hover:to-pink-500 hover:text-white cursor-pointer transition-all">
            <IoIosArrowForward />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-zinc-100 rounded-xl p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4 sm:gap-5 items-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-pink-400">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h5 className="text-lg sm:text-xl font-bold">{item.name}</h5>
                  <p className="text-zinc-600 text-sm sm:text-base">
                    {item.profession}
                  </p>
                  <span className="flex text-yellow-400 mt-2 text-lg sm:text-xl gap-1">
                    {Array.from({ length: item.rating }, (_, index) => (
                      <FaStar key={index} />
                    ))}
                  </span>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {item.para}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Aarav Mehta",
    profession: "Travel Photographer",
    rating: 5,
    para: "My trip to Ladakh was absolutely amazing! The team handled everything smoothly, from hotel bookings to local sightseeing",
    image: Customer1,
  },
  {
    id: 2,
    name: "Sofia Brown",
    profession: "Adventure Blogger",
    rating: 4,
    para: "Had a wonderful trekking experience in Himachal. The guides were professional, friendly, and made the whole journey fun and memorable",
    image: Customer2,
  },
  {
    id: 3,
    name: "Rahul Verma",
    profession: "Software Engineer",
    rating: 4,
    para: "I usually travel solo, but this company made me feel like part of a group. From seamless booking to on-time transfers, everything was top-notch!",
    image: Customer3,
  },
  {
    id: 4,
    name: "Elena García",
    profession: "Fitness Coach",
    rating: 5,
    para: "The Bali retreat was so refreshing! Everything from the resort to daily activities was perfectly arranged. It truly helped me relax and recharge!",
    image: Customer4,
  },
  {
    id: 5,
    name: "Kenji Tanaka",
    profession: "Travel Consultant",
    rating: 4,
    para: "My Europe trip was smooth and hassle-free. The itinerary covered amazing spots, and the support team ensured everything ran perfectly",
    image: Customer5,
  },
];
