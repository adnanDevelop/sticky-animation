import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Navbar from "./components/Navbar";

function App() {
  const [image, setImage] = useState("/image/img-1.png");
  const [activeTab, setActiveTab] = useState("industry");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2) {
          setImage(`/image/img-${index + 2}.png`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Navbar />
      {/* Sticky image animation */}
      <section className="grid grid-cols-12">
        <div className="sticky top-0 h-screen  col-span-5   ">
          <img src={image} className="w-[700px]" alt="Sticky" />
        </div>
        <div className="p-4 space-y-20 col-span-7">
          <div className="section h-[100vh] text-black flex  justify-center flex-col">
            <h2 className="text-2xl font-bold mb-4">Section 1</h2>
            <p className="text-lg">This is the content of Section 1.</p>
          </div>
          <div className="section h-[100vh] text-black flex  justify-center flex-col">
            <h2 className="text-2xl font-bold mb-4">Section 2</h2>
            <p className="text-lg">This is the content of Section 2.</p>
          </div>
          <div className="section h-[100vh] text-black flex  justify-center flex-col">
            <h2 className="text-2xl font-bold mb-4">Section 3</h2>
            <p className="text-lg">This is the content of Section 3.</p>
          </div>
        </div>
      </section>
      {/* card slider */}
      <section className="mt-[80px]">
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          loop={true}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            572: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {[0, 1, 2, 0, 1, 2].map((_, index) => {
            return (
              <SwiperSlide key={index} className="my-5">
                <div className="w-full custom-shadow h-[400px] flex items-center justify-center text-[30px] text-black font-bold italic rounded-lg">
                  Card Slider {index + 1}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/* Tabs */}
      <section className="my-[80px]">
        <div className="flex items-center justify-center flex-col gap-3">
          <p className="text-gray-700 text-sm">
            We build the perfect solution for you
          </p>
          <h2 className="text-black text-[25px]">
            Find a solution for your business
          </h2>

          <div className="flex items-center h-[50px] gap-1 p-1 rounded-lg bg-gray-400">
            <button
              className={`w-full px-[20px] rounded-lg h-[40px] flex items-center justify-center text-[15px] text-black focus:outline-none ${
                activeTab === "industry" ? "bg-white text-black" : ""
              }`}
              onClick={() => setActiveTab("industry")}
            >
              Industry
            </button>
            <button
              className={`w-full px-[20px] rounded-lg h-[40px] text-nowrap focus:outline-none ${
                activeTab === "department" ? "bg-white text-black" : ""
              }`}
              onClick={() => setActiveTab("department")}
            >
              By Department
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="my-6">
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              activeTab === "industry"
                ? "opacity-100 block"
                : "opacity-0 hidden"
            }`}
          >
            <div className="grid grid-cols-3 gap-8 px-[100px]">
              {[0, 1, 2].map((_, index) => {
                return (
                  <div className="w-full custom-shadow h-[400px] flex items-center justify-center text-[30px] text-black font-bold italic rounded-lg">
                    Card Slider {index + 1}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`transition-opacity duration-500 ease-in-out ${
              activeTab === "department"
                ? "opacity-100 block"
                : "opacity-0 hidden"
            }`}
          >
            <div className="grid grid-cols-3 gap-8 px-[100px]">
              {[0, 1, 2].map((_, index) => {
                return (
                  <div
                    key={index}
                    className="w-full custom-shadow h-[400px] flex items-center justify-center text-[30px] text-black font-bold italic rounded-lg"
                  >
                    Card Slider
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Badge animation */}
      <section className="px-[100px]">
        <div className="sticky top-0 h-screen  col-span-5   flex items-center justify-center">
          <img src={image} className="w-[700px]" alt="Sticky" />
        </div>
        <div className="p-4 space-y-20 col-span-7">
          <div className="section h-[100vh] text-black flex  justify-center flex-col">
            <h2 className="text-2xl font-bold mb-4">Section 1</h2>
            <p className="text-lg">This is the content of Section 1.</p>
          </div>
          <div className="section h-[100vh] text-black flex  justify-center flex-col">
            <h2 className="text-2xl font-bold mb-4">Section 2</h2>
            <p className="text-lg">This is the content of Section 2.</p>
          </div>
          <div className="section h-[100vh] text-black flex  justify-center flex-col">
            <h2 className="text-2xl font-bold mb-4">Section 3</h2>
            <p className="text-lg">This is the content of Section 3.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
