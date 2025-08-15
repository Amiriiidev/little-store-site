import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { addCard } from "../redux/slices/cardSlices";

const SingleProduct = function () {
  const cameraRef = useRef(null);
  const designRef = useRef(null);
  const battreyRef = useRef(null);
  const [imgUrl, setImgUrl] = useState("../../public/images/image 9.svg");

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);

  const param = useParams();
  const currentProduct = data.find((i) => i.id == param.id);

  const autoScrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex space-x-5 justify-center mt-5 mb-10">
        <div className=" w-[215px] h-[222px] flex flex-col mr-6">
          <ul className="flex flex-col space-y-5  bg-[#FDFDFD] rounded-xl p-2 ">
            <p className="font-bold text-orange-500 font-Vazir   ">دسته بندی</p>

            <div className="flex group">
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
              <Link
                to={`/?category=mobile`}
                className="font-Vazir text-gray-400 font-light group-active:text-black"
              >
                تلفن همراه
              </Link>
            </div>
            <div className="flex group">
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
              <Link
                to={`/?category=laptop`}
                className="font-Vazir text-gray-400 font-light group-focus:text-black"
              >
                لپ تاپ
              </Link>
            </div>
            <div className="flex group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                to={`/?category=watch`}
                className="font-Vazir text-gray-400 font-light group-focus:text-black"
              >
                ساعت هوشمند
              </Link>
            </div>
          </ul>
          <div>
            <img
              className="mt-64"
              src="../../public/images/Banner.svg"
              alt=""
            />
          </div>
          <div className="w-[215px] h-[188px] mt-4">
            <ul className="flex flex-col space-y-5  bg-[#FDFDFD] rounded-xl p-2 ">
              <li className="font-bold text-orange-500 font-Vazir   ">
                دسترسی سریع
              </li>
              <li className="text-lg font-Vazir font-medium text-slate-800">
                <button
                  onClick={() => autoScrollToRef(designRef)}
                  className="hover:cursor-pointer"
                >
                  {" "}
                  طراحی
                </button>
              </li>
              <li className="text-lg font-Vazir font-medium text-slate-800">
                <button
                  onClick={() => autoScrollToRef(cameraRef)}
                  className="hover:cursor-pointer"
                >
                  {" "}
                  دوربین{" "}
                </button>
              </li>
              <li className="text-lg font-Vazir font-medium text-slate-800">
                <button
                  onClick={() => autoScrollToRef(battreyRef)}
                  className="hover:cursor-pointer"
                >
                  {" "}
                  باتری
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex flex-col space-y-5">
            <li className=" bg-[#FDFDFD]  w-[1157px] h-[54px] flex items-center  space-x-1.5 rounded-lg pr-4">
              <p className="text-lg font-Vazir font-medium text-orange-400">
                {currentProduct.type}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3 rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>

              <p className="text-lg font-Vazir font-medium text-orange-400">
                {currentProduct.brand}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3 rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              <p className="text-lg font-Vazir font-medium text-slate-800">
                {currentProduct.name}
              </p>
            </li>
            <li className="bg-[#fdfdfd] w-[1157px] ">
              <div className="flex  justify-evenly  items-start mt-8 ">
                <div className="w-[306px] h-[490px] flex flex-col items-center  ">
                  <img
                    className="w-[306px] h-[376] object-cover"
                    src={imgUrl}
                    alt=""
                  />
                  <div className="flex space-x-2 mt-4">
                    <img
                      onClick={() =>
                        setImgUrl("../../public/images/image 11.svg")
                      }
                      className="w-20 h-[91px] object-cover"
                      src="../../public/images/image 11.svg"
                      alt=""
                    />
                    <img
                      onClick={() =>
                        setImgUrl("../../public/images/image 9.svg")
                      }
                      className="w-20 h-[91px] object-contain"
                      src="../../public/images/image 9.svg"
                      alt=""
                    />
                    <img
                      onClick={() =>
                        setImgUrl("../../public/images/image 10.svg")
                      }
                      className="w-20 h-[91px] object-cover"
                      src="../../public/images/image 10.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" w-[306px] h-[490px] flex flex-col justify-start  space-y-1 mt-5">
                  <div className="flex  space-x-4 ">
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
                    <p className="text-base font-medium text-orange-400 font-Vazir">
                      تلفن همراه
                    </p>
                    <p className="font-Vazir"> اپل</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium text-2xl text-slate-800">
                      {currentProduct.name}
                    </p>
                    <p className="text-slate-800 text-xl font-light">
                      apple iphone 13 128G
                    </p>
                  </div>
                  <div className="flex w-[400px] h-[67px] space-x-20 items-center">
                    <p className="font-medium text-slate-800 text-[22px]">
                      {" "}
                      انتخاب رنگ:
                    </p>
                    <ul className="flex ">
                      <li className="w-9 h-9 rounded-full bg-yellow-500 -ml-2"></li>
                      <li className="w-9 h-9 rounded-full bg-indigo-600 -ml-2"></li>
                      <li className="w-9 h-9 rounded-full bg-[#909bbf] -ml-2"></li>
                      <li className="w-9 h-9 rounded-full bg-orange-400 -ml-2"></li>
                      <li className="w-9 h-9 rounded-full bg-slate-700 -ml-2"></li>
                    </ul>
                  </div>
                  <div>
                    <ul className=" w-[226px] h-[244px] list-disc marker:text-orange-400">
                      <p className="text-2xl font-medium">ویژگی کالا</p>
                      <li>
                        حافظه داخلی :
                        <br />
                        <p className="font-bold text-slate-800 ">۱۲۸ گیگ</p>
                      </li>
                      <li>
                        بازه اندازه صفحه نمایش :
                        <br />
                        <p className="font-bold text-slate-800">
                          {" "}
                          ۶اینچ و بزرگتر
                        </p>
                      </li>
                      <li>
                        شبکه های ارتباطی :
                        <br />
                        <p className="font-bold text-slate-800">3g 4g 5g </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-[284px] h-[313px] flex flex-col justify-center bg-[#f4f4f4] items-start  ">
                  <div className="flex space-x-1.5 space-y-2">
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
                        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                      />
                    </svg>
                    <p className="text-lg text-slate-800 font-semibold ">
                      فروشنده :
                    </p>
                    {"  "}
                    <p className="text-lg text-slate-800 font-light">
                      دیجی تایز
                    </p>
                  </div>
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
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>

                    <p className="text-lg text-slate-800 font-semibold ">
                      گارانتی :
                    </p>
                    {"  "}
                    <p className="text-lg text-slate-800 font-light">
                      {" "}
                      ۱۸ماه زرین خدمت
                    </p>
                  </div>
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
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>

                    <p className="text-lg text-slate-800 font-semibold ">
                      ارسال توسط :
                    </p>
                    {"  "}
                    <p className="text-lg text-slate-800 font-light">
                      {" "}
                      انبار تهران{" "}
                    </p>
                  </div>
                  <div className="mt-15 flex flex-col items-center ">
                    <p className=" self-end relative left-4 -bottom-3 text-orange-600 text-2xl float-end">
                      {`${currentProduct.price} تومان `}
                    </p>

                    <Link
                      onClick={() => {
                        dispatch(
                          addCard({
                            id: currentProduct.id,
                            name: currentProduct.name,
                            price: currentProduct.price,
                            quanity: 1,
                          })
                        );
                      }}
                      to={`/card/${currentProduct.id}`}
                      className="relative right-3 -bottom-5 text-center content-center  bg-orange-500 w-[258px] h-[52px] rounded-sm  text-white font-Vazir font-bold"
                    >
                      {" "}
                      اضافه به سبد خرید{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[80%] m-auto">
                <h1 className="text-slate-800 font-medium text-3xl">
                  معرفی محصول
                </h1>
                <p className="font-light text-2xl/10 mt-12">
                  آیفون ۱۳ از سری پرچمداران ۲۰۲۱ اپل با قابلیت های فراوان است که
                  در تاریخ ۱۴ سپتامبر به صورت رسمی رونمایی شد و پس از گذشت مدتی
                  در تاریخ ۲۴ سپتامبر به بازارهای جهانی راه یافت و توانست بسیاری
                  از طرفداران برند اپل را به خرید متقاعد سازد. طراحی iPhone 13
                  Pro مشابه سری پیشین با تغییراتی جزئی است که در رنگ های زیبای
                  آبی، مشکی گرافیت، طلایی و نقره ای عرضه شده است؛ بدنه ابعادی
                  معادل ۱۴۶.۷x۷۱.۵x۷.۷ میلی متر دارد و وزن آن حدود ۲۰۰ گرم است
                  که نشان از طراحی هوشمندانه و استفاده مناسب از متریال دارد و
                  سبب شده تا این گوشی جزو خوش دست ترین مدل های تولید شده در سال
                  ۲۰۲۱ قرار گیرد. این گوشی پرچمدار دارای یک نمایشگر بسیار با
                  کیفیت از نوع OLED است و کیفیت بسیار بالایی را هنگام نمایش
                  محتواهای مختلف ارائه می دهد و تصاویر را نزدیک به واقعیت نمایش
                  می دهد که قابلیت بسیار حائز اهمیت و رضایت بخشی برای کاربران
                  محسوب می شود.
                </p>
              </div>
              <div className="w-[80%] mt-20 m-auto">
                <h1
                  ref={designRef}
                  className="text-slate-800 font-medium text-3xl"
                >
                  طراحی
                </h1>
                <p className="font-light text-2xl/10 mt-12">
                  کمپانی اپل پس از معرفی سری آیفون ۱۲ بار دیگر طراحی گوشی های
                  خود، با فریم های پهن و زاویه دار را مورد استفاده قرار داد.
                  آیفون ۱۳ پرو نیز به پیروی از نسل پیشین خود با یک طراحی بسیار
                  جذاب رونمایی و عرضه شد. پنل پشتی و نمایشگر این گوشی مانند
                  تمامی گوشی های بالارده با استفاده از شیشه ساخته شده که با یک
                  لایه محافظ پوشیده شده است؛ در قسمت پشتی شاهد یک ماژول مربعی
                  شکل هستیم که دوربین اصلی را تشکیل می دهد و به علت طراحی خاصی
                  که دارد این مدل را نسبت به همرده های خود در بین محصولات سایر
                  کمپانی ها متفاوت ساخته است همچنین فریم آلومینیومی در نظر گرفته
                  شده برای آن نیز درخشش خاصی را ایجاد کرده که بی نظیر است. رنگ
                  های بسیار خاص در نظر گرفته شده برای iPhone 13 Pro در کنار
                  طراحی منحصر به فرد یک پرچمدار بی همتا را به دنیای تکنولوژی
                  عرضه کرده که نگاه هر بیننده ای را متوجه خود می سازد.
                </p>
              </div>

              <div className="w-[538px] h-[407px] m-auto mt-5">
                <img src="/public/images/image 12.svg" alt="" />
              </div>

              <div className="w-[80%] mt-20 m-auto">
                <h1
                  ref={cameraRef}
                  className="text-slate-800 font-medium text-3xl"
                >
                  دوربین
                </h1>
                <p className="font-light text-2xl/10 mt-12">
                  کیفیت بسیار بالای دوربین در گوشی های آیفون همواره در بین
                  کاربران علاقه مند به دنیای تکنولوژی زبانزد بوده است. iPhone 13
                  Pro نیز با دوربین اصلی چهارگانه خود و بهره مندی از قابلیت
                  سینماتیک توانسته است بسیار محبوب واقع شود. دوربین اصلی در نظر
                  گرفته شده برای این مدل به ترتیب از یک لنز عریض ۱۲ مگاپیکسلی با
                  دریچه دیافراگم f/1.5، لنز تله فوتو ۱۲ مگاپیکسلی با دریچه
                  دیافراگم f/2.8، لنز ۱۲ مگاپیکسلی فوق عریض با دریچه دیافراگم
                  f/1.8 و یک سنسور TOF 3D LiDAR تشکیل شده است که قابلیت های ویژه
                  ای را به آیفون ۱۳ پرو بخشیده اند. در قسمت جلو نیز درون ناچ
                  تعبیه شده در بالای نمایشگر یک لنز ۱۲ مگاپیکسلی عریض و یک سنسور
                  عمق و تشخیص چهره از نوع SL 3D تعبیه شده که امکانات منحصر به
                  فردی را در هنگام عکس برداری و فیلم برداری در اختیار کاربر قرار
                  می دهد.
                </p>
              </div>
              <div className="w-[80%] mt-20 m-auto">
                <h1
                  ref={battreyRef}
                  className="text-slate-800 font-medium text-3xl"
                >
                  باتری
                </h1>
                <p className="font-light text-2xl/10 mt-12 mb-24">
                  در بین هواداران گوشی های آیفون همیشه دغدغه باتری و ظرفیت پایین
                  آن وجود داشته است. آیفون ۱۳ پرو با باتری قدرتمند 3095 میلی
                  آمپری توانسته است دغدغه های کاربران را به خوبی رفع کند. این
                  گوشی دارای قابلیت شارژ سریع ۲۳ وات است که این اطمینان را به
                  کاربر می دهد که انرژی دستگاه را در کوتاه ترین زمان ممکن مجددا
                  بازیابی خواهد شد. البته قابلیت شارژ بی سیم ۱۵ وات با استفاده
                  از مگ سیف نیز از دیگر ویژگی های iPhone 13 Pro محسوب می شوند.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
