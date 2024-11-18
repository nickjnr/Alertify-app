import "../App.css";

import chrome from "../assets/chrome.svg";
import firefox from "../assets/firefox.svg";
import safari from "../assets/safari.svg";
import arrowIcon from "../assets/Features/arrowIcon.svg";

const CompatibilityList = [
  {
    logo: chrome,
    name: "Chrome",
    details:
      "Bolster website retention rate with Windows & Android OS compatible push notifications. Easily send web push notifications on any device.",
  },
  {
    logo: firefox,
    name: "Firefox",
    details:
      "Maximize your ROI with Firefox browser compatible notifications. Send real-time push notifications on smart phones & desktops.",
  },
  {
    logo: safari,
    name: "Safari",
    details:
      "Skyrocket site conversion rate with Safari browser compatible. We use Apple Notification Services to effectively deliver your message.",
  },
];

const Compatibility = () => {
  return (
    <div className="py-10 fontRubik bg-white">
      <h1 className="text-center text-lg font-normal">Compatibility</h1>
      <h1 className="text-center font-bold text-4xl">
        Support for Popular Web Browsers
      </h1>
      <div className="flex flex-wrap justify-center p-10 gap-4">
        {CompatibilityList.map((list, index) => (
          <div
            className="text-center w-96  hover:shadow-lg hover:shadow-slate-500"
            key={index}
          >
            <div className="bg-white h-[419px] flex flex-col justify-center items-center shadow-md rounded-lg pt-12 pb-20 px-16">
              <img src={list.logo} alt="logo" className="py-10" />
              <h1 className="font-medium text-2xl my-2">{list.name}</h1>
              <p className="text-gray-700">{list.details}</p>
              <div className="font-medium text-xl transition-transform transform hover:translate-x-4 hover:text-blue-500 py-5 flex flex-row">
                <a href="#" className="">Read More </a>
                <img src={arrowIcon} alt="ArrowIcon" className="px-2 pt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compatibility;
