import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { Link, useSearchParams } from "react-router";
import { Box, Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slices/productSlices";
import { useOutletContext } from "react-router";
import photo from "../../public/images/Banner.svg";
import photo1 from "../../public/images/iphoneblack.svg";
const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function Rtl(props) {
  return <CacheProvider value={rtlCache}>{props.children}</CacheProvider>;
}

const theme = createTheme({
  direction: "rtl",
});

function Home() {
  const { searchValue } = useOutletContext();

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);
  const [brandsIsOpen, setBrandsIsOpen] = useState(true);
  const [colorsIsOpen, setColorsIsOpen] = useState(true);

  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState();
  const [searchparams, setSearchParams] = useSearchParams();
  const [brands, setBrands] = useState([]);
  const [prices, setPrices] = useState([0, 15000]);
  const [colors, setColors] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const category = searchparams.get("category");

  const totalItems = filteredData.length;
  const perItemsInPage = 15;
  const startIndex = (page - 1) * perItemsInPage;
  const endIndex = startIndex + perItemsInPage;
  const pages = Math.ceil(totalItems / perItemsInPage);
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleBrandsChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setBrands([...brands, value]);
    } else {
      setBrands(brands.filter((brand) => brand !== value));
    }
  };
  // const handleChangeRangeNumber = (event, newValue) => {
  //   console.log(newValue, event);
  //   setRangeNumber(newValue);
  // };

  const handleColorsChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setColors([...colors, value]);
    } else {
      setColors(colors.filter((c) => c !== value));
    }
  };

  const handlePriceChange = (e, newValue) => {
    if (prices && prices.length >= 2) {
      setPrices(newValue);
    } else {
      setPrices(prices.filter((p) => p !== newValue));
    }
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const getProducts = async () => {
    try {
      let filterData = data;
      if (searchValue) {
        filterData = filterData.filter((i) =>
          searchValue.split(" ").some((word) => i.name.includes(word))
        );
      }
      if (category) {
        filterData = filterData.filter((i) => i.type === category);
      }

      if (brands && brands.length > 0) {
        filterData = filterData.filter((i) => brands.includes(i.brand));
      }

      if (colors && colors.length > 0) {
        filterData = filterData.filter((item) => colors.includes(item.color));
      }

      if (prices && prices.length > 0) {
        filterData = filterData.filter(
          (i) =>
            Number(i.price) <= Number(prices[1]) &&
            Number(i.price) >= Number(prices[0])
        );
      }

      switch (sortType) {
        // case "topView":
        //   filterData.sort((a, b) => b.views - a.views);
        //   break;
        case "lowPrice":
          filterData = filterData.sort((a, b) => a.price - b.price);
          break;
        // case "lovely":
        //   filterData.sort((a, b) => b.views - a.views);
        //   break;
        case "hightPrice":
          filterData = filterData.sort((a, b) => b.price - a.price);
          break;

        default:
          break;
      }
      setFilteredData(filterData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [data, category, colors, brands, prices, sortType, searchValue]);

  return (
    <>
      <div className="flex justify-center space-x-5 mt-5">
        <div className="flex-col space-y-4 ">
          <div className="w-[215px] h-[631px] bg-stone-50 space-y-5 rounded-xl ">
            <ul className="flex flex-col space-y-5 mr-4">
              <p className="font-bold text-orange-500 font-Vazir mt-4 ">
                دسته بندی
              </p>

              <li
                onClick={() => {
                  setSearchParams({ category: "mobile" });
                  // setActiveTab("mobile");
                }}
                href="#"
                className={`flex group hover:cursor-pointer hover:bg-indigo-100 ${
                  category === "mobile" ? "bg-indigo-100 rounded-xl" : null
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <p className="font-Vazir text-gray-400 font-light group-focus:text-black hover:cursor-pointer">
                  تلفن همراه
                </p>
              </li>
              <li
                onClick={() => {
                  setSearchParams({ category: "laptop" });
                }}
                href="#"
                className={`flex group hover:bg-indigo-100 transition ${
                  category === "laptop" ? "bg-indigo-100 rounded-xl" : null
                } `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
                <p className="font-Vazir text-gray-400 font-light group-focus:text-black hover:cursor-pointer">
                  لپ تاپ
                </p>
              </li>
              <li
                onClick={() => {
                  setSearchParams({ category: "watch" });
                  // setActiveTab("watch");
                }}
                href="#"
                className={`flex group hover:bg-indigo-100 transition ${
                  category === "watch" ? "bg-indigo-100 rounded-xl" : null
                } `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fillRule="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-Vazir text-gray-400 font-light group-focus:text-black hover:cursor-pointer">
                  ساعت هوشمند
                </p>
              </li>
            </ul>
            <ul className="mr-4">
              <p className="font-bold text-orange-500 font-Vazir">فیلتر</p>
              <li className="flex-col space-y-1 mt-2">
                <div className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>

                  <label
                    className="font-light text-lg text-slate-800 font-Vazir"
                    htmlFor=""
                  >
                    برند
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    onClick={() => setBrandsIsOpen((pre) => !pre)}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-6 cursor-pointer transition-all ${
                      brandsIsOpen === false ? "rotate-180 " : null
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                <div className={brandsIsOpen ? null : "hidden"}>
                  <div>
                    <label
                      className="font-thin font-Vazir text-base text-slate-800"
                      htmlFor=""
                    >
                      اپل
                    </label>{" "}
                    <input
                      onChange={handleBrandsChange}
                      value={"apple"}
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <label
                      className="font-thin font-Vazir text-base text-slate-800"
                      htmlFor=""
                    >
                      سامسونگ
                    </label>{" "}
                    <input
                      onChange={handleBrandsChange}
                      value={"samsung"}
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <label
                      className="font-thin font-Vazir text-base text-slate-800"
                      htmlFor=""
                    >
                      شیایومی
                    </label>{" "}
                    <input
                      onChange={handleBrandsChange}
                      value={"xiaomi"}
                      type="checkbox"
                    />
                  </div>
                </div>
              </li>
              <li className="flex-col space-y-1 mt-2">
                <div className="flex space-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                    />
                  </svg>

                  <label
                    className="font-light text-lg text-slate-800 font-Vazir"
                    htmlFor=""
                  >
                    رنگ محصول
                  </label>
                  <svg
                    onClick={() => setColorsIsOpen((pre) => !pre)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-6  cursor-pointer transition-all ${
                      colorsIsOpen === false ? "rotate-180 " : null
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
                <div className={colorsIsOpen ? null : "hidden"}>
                  <div>
                    <label
                      className="font-thin font-Vazir text-base text-slate-800"
                      htmlFor=""
                    >
                      قرمز
                    </label>{" "}
                    <input
                      onChange={handleColorsChange}
                      value={"red"}
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <label
                      className="font-thin font-Vazir text-base text-slate-800"
                      htmlFor=""
                    >
                      ابی
                    </label>{" "}
                    <input
                      onChange={handleColorsChange}
                      value={"blue"}
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <label
                      className="font-thin font-Vazir text-base text-slate-800"
                      htmlFor=""
                    >
                      زرد
                    </label>{" "}
                    <input
                      onChange={handleColorsChange}
                      value={"yellow"}
                      type="checkbox"
                    />
                  </div>
                </div>
              </li>
              <li className="mt-2">
                <div className="flex space-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                    />
                  </svg>

                  <label
                    className="font-light text-lg text-slate-800 font-Vazir"
                    htmlFor=""
                  >
                    قیمت محصول
                  </label>
                </div>
                <div>
                  <Box sx={{ width: 150 }}>
                    <Slider
                      min={0}
                      max={15000}
                      getAriaLabel={() => "Temperature range"}
                      value={prices}
                      valueLabelDisplay="auto"
                      onChange={handlePriceChange}
                      color="secondary"
                    />
                  </Box>
                  {/* <input
                    type="range"
                    min="0"
                    max="15000"
                    value={value}
                    onChange={handlePriceChange}
                  /> */}
                  <div className="flex justify-between w-[80%]">
                    <p> {prices[1]} </p>
                    <p>{prices[0]}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-[215px] h-[170px] bg-yellow-200 rounded-2xl">
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="flex-col bg-stone-100 ">
          <div className="w-[1157px] h-[54px] bg-stone-50 m-auto content-center rounded-[5px]">
            <ul className="flex items-center space-x-7">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </li>
              <button
                onClick={() => {
                  setSortType("lovely");
                }}
                href="#"
                className={`font-Vazir font-light text-[16px] hover:cursor-pointer  transition ${
                  sortType === "lovely" ? "text-black" : "text-gray-400"
                }`}
              >
                محبوب ترین محصول
              </button>
              <button
                onClick={() => {
                  setSortType("topView");
                }}
                className={`font-Vazir font-light text-[16px] hover:cursor-pointer transition ${
                  sortType === "topView" ? "text-black" : "text-gray-400"
                } `}
              >
                پربازدیدترین
              </button>
              <button
                onClick={() => {
                  setSortType("hightPrice");
                }}
                className={`font-Vazir font-light text-[16px] hover:cursor-pointer transition ${
                  sortType === "hightPrice" ? "text-black" : "text-gray-400"
                } `}
              >
                {" "}
                گرانترین
              </button>
              <button
                onClick={() => {
                  setSortType("lowPrice");
                }}
                className={`font-Vazir font-light text-[16px] hover:cursor-pointer transition  ${
                  sortType === "lowPrice" ? "text-black" : "text-gray-400"
                }`}
              >
                ارزانترین
              </button>
            </ul>
          </div>
          <ul className="w-[1159px] h-[1169px] bg-stone-100 mt-5 grid grid-cols-5 grid-rows-3  gap-y-10 gap-x-5">
            {currentData.map((i, index) => {
              return (
                <li
                  key={index}
                  className="bg-stone-50 rounded-xl drop-shadow-xl  flex flex-col justify-between "
                >
                  <div className=" w-[202px] h-[159px] bg-[#e2e2e2] m-auto mt-3 rounded-xl relative ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="-8 -8 40 40"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-7 absolute text-white bg-gray-300 rounded-full right-1.5 top-1.5 active:text-red-500 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>

                    <img className="m-auto object-center" src={photo1} alt="" />
                  </div>
                  <div className="w-[90%] m-auto flex justify-between items-center">
                    <p className="text-gray-400 text-[16px] font-light font-Vazir ">
                      تلفن همراه
                    </p>
                    <ul className="flex">
                      <li className="w-3.5 h-3.5 bg-yellow-400 rounded-full -ml-0.5"></li>
                      <li className="w-3.5 h-3.5 bg-slate-200 rounded-full -ml-0.5"></li>
                      <li className="w-3.5 h-3.5 bg-indigo-600 rounded-full -ml-0.5"></li>
                      <li className="w-3.5 h-3.5 bg-orange-500 rounded-full -ml-0.5"></li>
                      <li className="w-3.5 h-3.5 bg-slate-700 rounded-full -ml-0.5"></li>
                    </ul>
                  </div>
                  <div>
                    <p className=" text-lg text-slate-800 font-Vazir font-medium mr-3">
                      {i.name}
                    </p>
                  </div>
                  <p className="self-end ml-1.5 text-red-400 font-Vazir font-medium text-xl">
                    {i.price}
                  </p>
                  <hr className="w-[80%] m-auto text-gray-200" />
                  <Link
                    to={`/singleProduct/${i.id}`}
                    className="text-orange-600 text-lg font-bold  font-Vazir  self-center -mt-2 mb-4"
                  >
                    {" "}
                    ثبت سفارش
                  </Link>
                </li>
              );
            })}
            {/* <li className="bg-stone-50 rounded-xl drop-shadow-xl  flex flex-col justify-between ">
              <div className=" w-[202px] h-[159px] bg-[#e2e2e2] m-auto mt-3 rounded-xl relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="-8 -8 40 40"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-7 absolute text-white bg-gray-300 rounded-full right-1.5 top-1.5 active:text-red-500 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>

                <img
                  className="m-auto object-center"
                  src="../public/images/iphoneblack.svg"
                  alt=""
                />
              </div>
              <div className="w-[90%] m-auto flex justify-between items-center">
                <p className="text-gray-400 text-[16px] font-light font-Vazir ">
                  تلفن همراه
                </p>
                <ul className="flex">
                  <li className="w-3.5 h-3.5 bg-yellow-400 rounded-full -ml-0.5"></li>
                  <li className="w-3.5 h-3.5 bg-slate-200 rounded-full -ml-0.5"></li>
                  <li className="w-3.5 h-3.5 bg-indigo-600 rounded-full -ml-0.5"></li>
                  <li className="w-3.5 h-3.5 bg-orange-500 rounded-full -ml-0.5"></li>
                  <li className="w-3.5 h-3.5 bg-slate-700 rounded-full -ml-0.5"></li>
                </ul>
              </div>
              <div>
                <p className=" text-lg text-slate-800 font-Vazir font-medium mr-3">
                  ایفون۱۳مدل۱۲۸گیگ
                </p>
              </div>
              <p className="self-end ml-1.5 text-red-400 font-Vazir font-medium text-xl">
                ۲۸/۲۵۰/۰۰۰ تومان
              </p>
              <hr className="w-[80%] m-auto text-gray-200" />
              <a
                className="text-orange-600 text-lg font-bold font-Vazir  self-center -mt-2 mb-4"
                href="#"
              >
                {" "}
                ثبت سفارش
              </a>
            </li>
            <li className="bg-stone-50 rounded-xl drop-shadow-xl  flex flex-col justify-between ">
              <div className=" w-[202px] h-[159px] bg-[#e2e2e2] m-auto mt-3 rounded-xl relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="-8 -8 40 40"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-7 absolute text-white bg-gray-300 rounded-full right-1.5 top-1.5 active:text-red-500 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>

                <img
                  className="m-auto object-center"
                  src="../public/images/iphoneblack.svg"
                  alt=""
                />
              </div>
              <div className="w-[90%] m-auto flex justify-between items-center">
                <p className="text-gray-400 text-[16px] font-light font-Vazir ">
                  تلفن همراه
                </p>
                <ul className="flex">
                  <li className="w-3.5 h-3.5 bg-yellow-400 rounded-full -ml-0.5"></li>
                  <li className="w-3.5 h-3.5 bg-slate-200 rounded-full -ml-0.5"></li>
                  <li className="w-3.5 h-3.5 bg-indigo-600 rounded-full -ml-0.5"></li>
                  <li className="w-3.5 h-3.5 bg-orange-500 rounded-full -ml-0.5"></li>
                  <li className="w-3.5 h-3.5 bg-slate-700 rounded-full -ml-0.5"></li>
                </ul>
              </div>
              <div>
                <p className=" text-lg text-slate-800 font-Vazir font-medium mr-3">
                  ایفون۱۳مدل۱۲۸گیگ
                </p>
              </div>
              <p className="self-end ml-1.5 text-red-400 font-Vazir font-medium text-xl">
                ۲۸/۲۵۰/۰۰۰ تومان
              </p>
              <hr className="w-[80%] m-auto text-gray-200" />
              <a
                className="text-orange-600 text-lg font-bold font-Vazir  self-center -mt-2 mb-4"
                href="#"
              >
                {" "}
                ثبت سفارش
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={theme}>
          <Pagination
            onChange={(_, value) => setPage(value)}
            dir="rtl"
            count={pages}
            variant="outlined"
            shape="rounded"
            className="flex justify-center mb-10 mt-20"
          />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default Home;
