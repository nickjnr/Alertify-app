import "../App.css";

import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import starIcon from "../assets/staricon.svg";
import BlankstarIcon from "../assets/Blank-staricon.svg";

import headerImg from "../assets/header image.svg";

export default function Header() {
  return (
    <div className="header_bg flex flex-row pt-32 pb-32">
      <div className="text-white fontRubik w-full lg:w-3/5 pt-3 pb-20 lg:pb-3  px-16">
        <h1 className="font-bold text-6xl leading-[71px] ">
          Maximize <span className="text-black">Engagement</span> Minimize Churn
        </h1>
        <p className=" text-lg font-normal py-2 mr-3">
          Push Notifications, Email, SMS & In-App Messaging to drive engaged and
          loyal customers.
        </p>
        <p className="text-lg font-normal py-2 mr-3">
          Already using <span className=" font-medium">Alertify</span>
        </p>

        <div className="flex flex-row">
          <div className="flex items-center p-4 rounded-lg">
            <div className="flex -space-x-4">
              <img
                className="w-12 h-12 rounded-full border-2 border-white"
                src={img1}
                alt="Profile 1"
              />
              <img
                className="w-12 h-12 rounded-full border-2 border-white"
                src={img2}
                alt="Profile 2"
              />
              <img
                className="w-12 h-12 rounded-full border-2 border-white"
                src={img3}
                alt="Profile 3"
              />
              <img
                className="w-12 h-12 rounded-full border-2 border-white"
                src={img4}
                alt="Profile 4"
              />
            </div>
          </div>
          <div className="text-lg font-bold flex flex-col px-5 border-r-2">
            <p className=" font-semibold text-4xl">2,219</p>
            <p className=" font-normal text-base"> Happy Customers</p>
          </div>

          <div className="font-semibold px-5">
            <p className=" font-semibold text-4xl">4.8/5</p>
            <div className="flex flex-row">
              <img src={starIcon} alt="starIcon" />
              <img src={starIcon} alt="starIcon" />
              <img src={starIcon} alt="starIcon" />
              <img src={starIcon} alt="starIcon" />
              <img src={BlankstarIcon} alt="starIcon" />
              <p className=" font-normal text-base">Ratings</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row py-5">
          <button
            type="button"
            className="text-white hover:bg-white hover:text-blue-600 rounded-[30px] py-4 px-10 border border-white gap-3 mx-5"
          >
            Contact Sales
          </button>
          <button className="bg-white text-black hover:bg-black hover:text-white rounded-[30px] py-4 px-10">
            Get Started Now
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-0  lg:w-2/5">
        <img
          src={headerImg}
          alt="header-Image"
          className="w-[462px] h-[567px]"
        />
      </div>
    </div>
  );
}
