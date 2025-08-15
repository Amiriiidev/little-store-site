import { useState } from "react";
import { Link } from "react-router";

const Header = function ({ searchValue }) {
  const [_, setValue] = useState("");

  let timeId;
  const valueHandler = (e) => {
    const test = e.target.value;

    clearTimeout(timeId);
    timeId = setTimeout(() => {
      setValue(test);
      searchValue(test);
    }, 1000);
  };

  return (
    <>
      <div className=" w-[1440px] h-[120px] bg-stone-50 flex items-center m-auto justify-center drop-shadow-xl">
        <ul className="flex space-x-12 items-center w-[615px] h-[46px]">
          <li className="text-2xl font-extrabold text-red-600 font-Vazir ml-6">
            دیجی<span className="text-2xl text-black"> تایز</span>
          </li>
          <Link to={"/"} className="font-Vazir font-bold text-2xl" href="#">
            خانه
          </Link>
          <Link
            to={"/?category=mobile"}
            className="font-Vazir font-medium text-2xl"
            href="#"
          >
            تلفن همراه
          </Link>
          <Link
            to={"/?category=laptop"}
            className="font-Vazir font-medium text-2xl"
            href="#"
          >
            لپ تاپ
          </Link>
        </ul>
        <ul className="w-[706px] h-[54px] flex justify-between relative drop-shadow-xl inset-shadow-2xs">
          <li>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-8 right-2 top-[25%] absolute text-black/80 font-extralight"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="w-[706px] h-[54px] ">
            <input
              className="w-[706px] h-[54px] text-xl bg-stone-100 outline-0 pr-20 font-Vazir placeholder:text-gray-300  "
              placeholder=" جستوجوی نام محصول و یا مدل و یا برند و ... ‍‍‍‍‍‍‍‍"
              onChange={valueHandler}
              type="text"
              name="text"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
