import { useDispatch, useSelector } from "react-redux";
import {
  decreacesQuanity,
  deleteItem,
  increacesQuanity,
  resetCard,
} from "../redux/slices/cardSlices";
import { Link } from "react-router";
import photo7 from "../../public/images/image 7.svg";
const Card = function () {
  const dispatch = useDispatch();
  const valueOfCard = useSelector((state) => state.card);

  const finalListOfBuyed = valueOfCard.map(
    (i) => Number(i.quanity) * Number(i.price)
  );
  const totalPrice = finalListOfBuyed.reduce((acc, crr) => {
    return acc + crr;
  }, 0);

  const offer = 0;
  const finallPrice = totalPrice - offer;

  return (
    <>
      <div className="flex space-x-[30px] w-[1440px]  m-auto mt-5 mb-5">
        <div className="flex flex-col justify-start ">
          <div className="w-[879px] h-[43px] flex justify-between m-auto ">
            <p className="text-2xl font-medium text-slate-800">سبد خرید </p>
            <Link
              to={"/"}
              className="text-xl text-orange-400 font-medium"
              href=""
            >
              {" "}
              بازگشت به خانه
            </Link>
          </div>
          <div className=" overflow-auto h-[635px] bg-[#FDFDFD] rounded-lg">
            <ul>
              {valueOfCard.map((i) => (
                <div key={i.id}>
                  <li className="flex  w-[90%] m-auto mt-5 justify-between">
                    <div className="flex items-center space-x-5 ">
                      <img className="w-[78px] h-[136px]" src={photo7} alt="" />
                      <div className="flex flex-col justify-evenly h-[100%]">
                        <p className=" font-medium text-xl text-slate-900">
                          {i.name}
                        </p>
                        <p className="text-orange-900 font-medium text-2xl">
                          {i.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                      <svg
                        onClick={() => dispatch(deleteItem(i.id))}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-8 text-red-500 hover:cursor-pointer hover:bg-amber-300 rounded-2xl"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                      <div className="flex  items-center  space-x-5">
                        <svg
                          onClick={() => dispatch(increacesQuanity(i.id))}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6 bg-gray-200 rounded-full"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <p className="w-8 h-12 border-2 border-orange-400 text-center leading-12 ">
                          {i.quanity}
                        </p>
                        <svg
                          onClick={() => dispatch(decreacesQuanity(i.id))}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6 bg-orange-300 rounded-full"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li>
                    <hr className="text-gray-300 w-[80%] m-auto mt-10" />
                  </li>
                </div>
              ))}
              {/* <li className="flex  w-[90%] m-auto mt-5 justify-between">
                <div className="flex items-center space-x-5 ">
                  <img
                    className="w-[78px] h-[136px]"
                    src="/public/images/image 7.svg"
                    alt=""
                  />
                  <div className="flex flex-col justify-evenly h-[100%]">
                    <p className=" font-medium text-xl text-slate-900">
                      ساعت هوشمند اپل سری ۶
                    </p>
                    <p className="text-orange-900 font-medium text-2xl">
                      ۲/۲۵۰/۰۰۰ تومان
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-8 text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <div className="flex  items-center  space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 bg-gray-200 rounded-full"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <p className="w-8 h-12 border-2 border-orange-400 text-center leading-12 ">
                      1
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 bg-orange-300 rounded-full"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </div>
                </div>
              </li>
              <li>
                <hr className="text-gray-300 w-[80%] m-auto mt-10" />
              </li> */}
            </ul>
          </div>
        </div>

        <div className="w-[469px] h-[635px] content-center">
          <ul className="w-[469px] h-[330px] flex flex-col justify-between bg-[#ffffff] mb-10 rounded-xl">
            <li className="flex justify-between w-[80%] m-auto">
              {" "}
              <p className="text-2xl text-slate-800 font-medium">
                مجموع قیمت :
              </p>
              <p className="text-orange-700 text-2xl font-medium">
                {totalPrice}
              </p>
            </li>
            <li className="flex justify-between w-[80%] m-auto items-center">
              <p className="text-2xl font-normal font-sans">کد تخفیف :</p>
              <div className="w-[224px] h-[44px] flex border-2 border-[#606060] rounded-xl overflow-hidden items-center ">
                <input
                  className="w-[70%] outline-0 p-1.5 placeholder:text-gray-400 text-center "
                  placeholder="123ABC"
                  type="text"
                />
                <button className=" w-[30%]  h-[44px] bg-orange-400 text-xl font-medium text-white text-center ">
                  تایید
                </button>
              </div>
            </li>
            <li className="flex justify-between w-[80%] m-auto">
              {" "}
              <p className="text-2xl font-sans font-normal text-slate-900">
                تخفیف :
              </p>
              <p className="text-slate-800 font-bold text-2xl"> {offer} </p>
            </li>
            <li className="flex justify-between w-[80%] m-auto">
              <p className="text-2xl font-sans font-normal text-slate-900">
                قیمت نهایی :
              </p>
              <p className="text-orange-700 text-2xl font-medium">
                {finallPrice}
              </p>
            </li>
          </ul>
          <button className="w-[469px] h-[62px] text-2xl font-bold text-white rounded-lg bg-orange-400 mb-4">
            ادامه فرایند خرید{" "}
          </button>
          <Link
            onClick={() => dispatch(resetCard())}
            to={"/"}
            className="w-[100%] h-[62px] mb-4 border-2 rounded-lg inline-block text-center content-center border-orange-400 bg-transparent text-orange-400 font-medium font-sans text-2xl"
          >
            {" "}
            انصراف از فرایند خرید{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
