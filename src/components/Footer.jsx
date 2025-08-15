import { Link } from "react-router";

const Footer = function () {
  return (
    <>
      <ul className="bg-[#fdfdfd] w-[1440px] h-[507px] flex m-auto space-x-32 ">
        <li className=" flex flex-col w-[613px] h-[100%] mt-15 mr-20  ">
          <h1 className="text-5xl font-bold font-Vazir text-orange-500 justify-self-start ">
            دیجی <span className="text-gray-700"> تایز</span>
          </h1>
          <p className="font-Vazir text-[#222f5d] text-2xl leading-15 font-light mt-15 ">
            دیجی تایز عرضه کننده جدیدترین محصولات الکترونیک شامل موبایل تبلت
            کامپیوتر میباشد و توانسته تا کنون به 232/122 نفر خدمت رسانی داشته
            باشد.
          </p>
        </li>
        <li className="w-[148px] h-[100%] flex flex-col justify-center space-y-8">
          <p className=" font-bold font-Vazir text-3xl text-[#222f5d]">
            محصولات
          </p>
          <Link
            to={"/?category=mobile"}
            className="font-Vazir font-medium text-2xl text-[222F5D]"
          >
            تلفن همراه
          </Link>
          <Link
            to={"/?category=laptop"}
            className="font-Vazir font-medium text-2xl text-[222F5D]"
          >
            لپ تاپ
          </Link>
          <Link
            to={"/?category=watch"}
            className="font-Vazir font-medium text-2xl text-[222F5D]"
          >
            ساعت هوشمند
          </Link>
        </li>
        <li className="text-center flex flex-col space-y-1.5">
          <img
            className="bg-cover w-72 h-72 p-4"
            src="../public/images/image 14.svg"
            alt=""
          />
          <div className="flex space-x-2 justify-center">
            <p>09180003535</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>

          <p>info@digitize.com</p>
        </li>
      </ul>
    </>
  );
};

export default Footer;
