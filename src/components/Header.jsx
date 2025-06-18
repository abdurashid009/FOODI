import React from "react";
import Logo from "../assets//Logo.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import headImg from "../assets//Intersect.png";
import mainImg from "../assets/pngwing 4.png";
import mainImg2 from "../assets/pngwing 6.png";
import mainImg3 from "../assets//pngwing 3.png";
import mainImg4 from "../assets//pngwing 7.png";
import mainImg5 from "../assets/Fattoush salad.png";
import mainImg6 from "../assets/Vegetable salad.png";
import mainImg7 from "../assets/Egg salad.png";
import Cheff from "../assets/cheff.png";
import Humans from "../assets/humans.png";
import Apple from "../assets/apple.png";
import Fast from "../assets/fast.png";
import Shop from "../assets/shop.png";
import Gift from "../assets/gift.png";
import Foter from "../assets/foter.png";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <nav class="flex justify-between items-center px-[90px] py-[30px]">
        <img src={Logo} alt="" />
        <ul class="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li class="text-green-500">Home</li>
          <li class="flex items-center space-x-1">
            Menu <span class="text-green-500">▼</span>
          </li>
          <li class="flex items-center space-x-1">
            Services <span class="text-green-500">▼</span>
          </li>
          <li>Offers</li>
        </ul>
        <div class="flex items-center space-x-4 ">
          <FiSearch />
          <button class="flex items-center gap-[10px] bg-green-500 text-white px-8 py-4 rounded-transparent rounded-[30px] font-semibold">
            <FaPhoneVolume /> Contact
          </button>
        </div>
      </nav>

      <section class="flex w-[100%] flex-col-reverse md:flex-row items-center gap-[100px] justify-between pl-[50px] md:px-20 py-[50px]">
        <div class="md:w-1/2 space-y-6">
          <h1 class="w-[450px] text-4xl md:text-5xl font-bold leading-tight">
            Dive into Delights Of Delectable{" "}
            <span class="text-green-500">Food</span>
          </h1>
          <p class="text-gray-600 text-lg">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <div class="flex space-x-4 items-center gap-[30px]">
            <button class="bg-green-500 text-white px-10 py-4 rounded-full font-semibold shadow-[4px_4px_20px_#39DB4A] ">
              Order Now
            </button>
            <div class="flex items-center space-x-2">
              <span class="text-gray-700 font-medium">Watch Video</span>
              <div class="w-10 h-10 rounded-full bg-[white] flex items-center justify-center shadow-[4px_4px_20px_#0000001A]">
                <svg
                  class="w-5 h-5  text-[#000000]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="md:w-1/2 relative">
          <div class="absolute z-1000000 top-[30px] left-[-50px] bg-white shadow-[4px_4px_20px_#00000024] rounded-full px-4 py-2 text-sm font-semibold text-red-500">
            Hot spicy Food 🌶️
          </div>
          <div class=" rounded-full z-0 bg-green-500 w-[350px] h-[350px] md:w-[420px] md:h-[420px] flex items-center justify-center overflow-hidden">
            <img
              src={headImg}
              alt="Food Image"
              class="object-cover absolute top-[-50px] z-1000 w-[437px] h-[470px] rounded-[50%] "
            />
          </div>
        </div>
      </section>
      <section class="py-12 text-center">
        <p class="text-red-400 uppercase text-sm tracking-widest font-medium">
          Customer Favorites
        </p>
        <h2 class="text-3xl font-bold mt-2 mb-8">Popular Categories</h2>
        <div class="mt-[60px] flex flex-wrap justify-center gap-[80px]">
          <div class="  flex flex-col items-center justify-center bg-white p-8 rounded-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.11)] w-70 h-70">
            <div className=" flex justify-center items-center w-[120px] h-[120px] bg-[#C1F1C6] rounded-[50%]">
              <img src={mainImg} alt="Main Dish" class="mx-auto" />
            </div>
            <h3 class="font-semibold text-[22px]">Main Dish</h3>
            <p class="text-gray-500 text-sm">(86 dishes)</p>
          </div>
          <div class="flex flex-col items-center justify-center bg-white p-6 rounded-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.11)] w-70 h-70">
            <div className=" flex justify-center items-center w-[120px] h-[120px] bg-[#C1F1C6] rounded-[50%]">
              <img src={mainImg2} alt="Main Dish" class="mx-auto w-[60px] " />
            </div>
            <h3 class="font-semibold text-[22px]">Break Fast</h3>
            <p class="text-gray-500 text-sm">(12 break fast)</p>
          </div>
          <div class=" flex flex-col items-center justify-center bg-white p-6 rounded-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.11)] w-70">
            <div className=" flex justify-center items-center w-[120px] h-[120px] bg-[#C1F1C6] rounded-[50%]">
              <img src={mainImg3} alt="Main Dish" class="mx-auto w-[62px] " />
            </div>
            <h3 class="font-semibold text-[22px]">Dessert</h3>
            <p class="text-gray-500 text-sm">(48 dessert)</p>
          </div>
          <div class="flex flex-col items-center justify-center bg-white p-6 rounded-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.11)] w-70">
            <div className=" flex justify-center items-center w-[120px] h-[120px] bg-[#C1F1C6] rounded-[50%]">
              <img src={mainImg4} alt="Main Dish" class="mx-auto w-[50px]" />
            </div>
            <h1 class="font-semibold text-[22px]">Browse All</h1>
            <p class="text-gray-500 text-sm">(255 Items)</p>
          </div>
        </div>
      </section>

      <section class="py-12 text-left px-4 md:px-20">
        <div className=" flex justify-center items-center gap-[800px]">
          <div>
            <p class="text-red-400 uppercase text-sm tracking-widest font-medium">
              Special Dishes
            </p>
            <h2 class="text-5xl font-bold mt-2 mb-8 leading-tight">
              Standout Dishes
              <br />
              From Our Menu
            </h2>
          </div>
          <div class="flex items-center justify-between mb-6">
            <div></div>
            <div class="flex gap-10">
              <button class="w-18 h-18 rounded-full flex justify-center items-center bg-gray-100">
                <FaChevronLeft />
              </button>
              <button class="w-18 h-18 rounded-full flex justify-center items-center bg-green-500">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white w-[400px] h-[500px]  p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.11)] relative">
            <div class="absolute top-0 right-0 bg-green-500 rounded-[0_20px_0_20px] px-5 py-4 ">
              <svg
                class="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.343l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </div>
            <img
              src={mainImg5}
              alt="Fattoush"
              class="rounded-full w-[] pb-[40px] h-[] mx-auto"
            />
            <h3 class="font-bold text-[28px] text-start">Fattoush salad</h3>
            <p class="text-gray-500 text-lg text-start">
              Description of the item
            </p>
            <div class="flex items-center justify-between mt-4">
              <span class="text-lg font-bold text-black">$24.00</span>
              <span class="text-yellow-500 flex items-center text-sm">
                <svg class="w-4 h-4 fill-current mr-1" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.416 8.266L12 18.896l-7.416 4.965L6 15.595 0 9.748l8.332-1.73z" />
                </svg>
                4.9
              </span>
            </div>
          </div>

          <div class="bg-white w-[400px] h-[500px]  p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.11)] relative">
            <div class="absolute top-0 right-0 bg-green-500 rounded-[0_20px_0_20px] px-5 py-4">
              <svg
                class="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.343l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </div>
            <img
              src={mainImg6}
              alt="Vegetable"
              class="rounded-full  mx-auto pb-[40px]"
            />
            <h3 class="font-bold text-[28px] text-start">Vegetable salad</h3>
            <p class="text-gray-500 text-lg text-start">
              Description of the item
            </p>
            <div class="flex items-center justify-between mt-4">
              <span class="text-lg font-bold text-black">$26.00</span>
              <span class="text-yellow-500 flex items-center text-sm">
                <svg class="w-4 h-4 fill-current mr-1" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.416 8.266L12 18.896l-7.416 4.965L6 15.595 0 9.748l8.332-1.73z" />
                </svg>
                4.6
              </span>
            </div>
          </div>

          <div class="bg-white w-[400px] h-[500px] p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.11)] relative">
            <div class="absolute top-0 right-0 bg-green-500 rounded-[0_20px_0_20px] px-5 py-4">
              <svg
                class="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.343l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </div>
            <img
              src={mainImg7}
              alt="Egg Vegi"
              class="rounded-full  mx-auto pb-[5px]"
            />
            <h3 class="font-bold text-[28px] text-start mt-4">
              Egg vegi salad
            </h3>
            <p class="text-gray-500 text-lg text-start">
              Description of the item
            </p>
            <div class="flex items-center justify-between mt-4">
              <span class="text-lg font-bold text-black">$23.00</span>
              <span class="text-yellow-500 flex items-center text-sm">
                <svg class="w-4 h-4 fill-current mr-1" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.416 8.266L12 18.896l-7.416 4.965L6 15.595 0 9.748l8.332-1.73z" />
                </svg>
                4.5
              </span>
            </div>
          </div>
        </div>
      </section>
      <section class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="relative">
          <img
            src={Cheff}
            alt="Chef"
            class="w-full max-w-md mx-auto relative z-10"
          />
          <div class="absolute top-10 left-0 w-3/5 h-3/4 rounded-r-full z-0"></div>
          <span class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow text-sm font-semibold">
            Our Best Chef
          </span>
        </div>

        <div className=" flex flex-col gap-[20px]">
          <p class="text-sm text-red-400 uppercase font-semibold">
            Testimonials
          </p>
          <h2 class="text-5xl font-bold mt-2 mb-4 w-[500px] leading-[60px]">
            What Our Customers Say About Us
          </h2>
          <p class="text-gray-600 text-[19px]">
            "I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable"
          </p>
          <div class="flex items-center mt-6">
            <div class="flex -space-x-2"></div>
            <div className=" w-[100%] flex justify-start gap-[40px] items-center">
              <img src={Humans} alt="Chef" class="w-[200px]" />
              <div>
                <p class="text-[22px] font-semibold">Customer Feedback</p>
                <p class="text-yellow-500 font-bold text-[18px]">
                  ⭐ 4.9{" "}
                  <span class="text-gray-500 font-normal">(19.6k Reviews)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="  py-16 px-6">
        <div class="flex justify-center gap-[100px] max-w-7xl mx-auto">
          <div class="flex flex-col justify-center items-start gap-[20px] mb-12">
            <p class="text-sm text-red-400 uppercase font-semibold">
              Our Story & Services
            </p>
            <h2 class="text-[50px] w-[600px] font-bold mt-2 mb-4">
              Our Culinary Journey And Services
            </h2>
            <p class="text-gray-600 max-w-xl text-[18px] font-[500]">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>
            <button class="mt-6 px-6 py-2 bg-[#39DB4A] text-white rounded-full font-semibold hover:bg-[#59b659] transition-[0.5s]">
              Explore
            </button>
          </div>

          <div class="flex flex-wrap gap-7 w-[500px]">
            <div class="bg-white w-[220px] h- flex justify-center shadow-[0_5px_20px_rgba(0,0,0,0.13)]  items-center flex-col  flex-col[240px] p-6 rounded-xl  text-center">
              <img src={Apple} className=" w-[40px]" alt="" />
              <h3 class=" text-green-500 text-[22px] font-bold mb-1">
                Catering
              </h3>
              <p class="text-sm text-gray-600">
                Delight your guests with our flavors and presentation
              </p>
            </div>
            <div class="bg-white w-[220px] flex justify-center items-center flex-col h-[240px] p-6 shadow-[0_5px_20px_rgba(0,0,0,0.13)] rounded-xl  text-center">
              <img src={Fast} className=" w-[40px]" alt="" />
              <h3 class=" text-green-500 text-[22px] font-bold mb-1">
                Fast Delivery
              </h3>
              <p class="text-sm text-gray-600">
                We deliver your order promptly to your door
              </p>
            </div>
            <div class="bg-white w-[220px] flex justify-center items-center flex-col h-[240px] shadow-[0_5px_20px_rgba(0,0,0,0.13)] p-6 rounded-xl  text-center">
              <img src={Shop} className=" w-[40px]" alt="" />
              <h3 class=" text-green-500 text-[22px] font-bold mb-1">
                Online Ordering
              </h3>
              <p class="text-sm text-gray-600">
                Explore menu & order with ease using our Online Ordering
              </p>
            </div>
            <div class="bg-white w-[220px] flex justify-center items-center flex-col h-[240px] shadow-[0_5px_20px_rgba(0,0,0,0.13)] p-6 rounded-xl  text-center">
              <img src={Gift} className=" w-[40px]" alt="" />
              <h3 class=" text-green-500 text-[22px] font-bold mb-1">
                Gift Cards
              </h3>
              <p class="text-sm text-gray-600">
                Give the gift of exceptional dining with Foodi Gift Cards
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class=" flex flex-col justify-center items-centerbg-white py-12 gap-[30px] px-6 ">
        <div class="max-w-7xl mx-auto grid grid-cols-1 gap-[60px] md:grid-cols-4">
          <div className=" flex flex-col gap-[20px]">
            <img src={Logo} className="w-[80px]" alt="" />
            <p class="text-sm text-gray-600">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
            <div class="flex space-x-3 mt-4">
              <a href="#" class="text-gray-500 hover:text-green-500">
                📘
              </a>
              <a href="#" class="text-gray-500 hover:text-green-500">
                📸
              </a>
              <a href="#" class="text-gray-500 hover:text-green-500">
                💬
              </a>
              <a href="#" class="text-gray-500 hover:text-green-500">
                ✉️
              </a>
            </div>
          </div>
          <div>
            <h4 class="font-bold mb-2">Useful links</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-2">Main Menu</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Menus</a>
              </li>
              <li>
                <a href="#">Reservation</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-2">Contact Us</h4>
            <p class="text-sm text-gray-600">example@email.com</p>
            <p class="text-sm text-gray-600">+64 958 248 966</p>
            <p class="text-sm text-gray-600">Social media</p>
          </div>
        </div>
        <div className="flex justify-start ml-[20px]">
          <img src={Foter} className="w-[1100px]" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Header;
