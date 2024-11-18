import { useState } from "react";
import "../App.css";
import faqIcon from "../assets/faqIcon.svg";

const faqData = [
  {
    question: "Who should use Alertify?",
    answer:
      "Alertify is perfect for business owners, bloggers, ecommerce site owners, and basically anyone who runs a website. If you want to get more returning visitors, make more sales, boost conversions, and reduce cart abandonment, then you need Alertify.",
  },
  {
    question: "What's required to use Alertify?",
    answer:
      "Alertify is perfect for business owners, bloggers, ecommerce site owners, and basically anyone who runs a website. If you want to get more returning visitors, make more sales, boost conversions, and reduce cart abandonment, then you need Alertify.",
  },
  {
    question: "Will Alertify slow down my website?",
    answer:
      "Alertify is perfect for business owners, bloggers, ecommerce site owners, and basically anyone who runs a website. If you want to get more returning visitors, make more sales, boost conversions, and reduce cart abandonment, then you need Alertify.",
  },
  {
    question: "Do I need to have coding skills to use Alertify?",
    answer:
      "Alertify is perfect for business owners, bloggers, ecommerce site owners, and basically anyone who runs a website. If you want to get more returning visitors, make more sales, boost conversions, and reduce cart abandonment, then you need Alertify.",
  },
  {
    question: "Will Alertify slow down my website?",
    answer:
      "Alertify is perfect for business owners, bloggers, ecommerce site owners, and basically anyone who runs a website. If you want to get more returning visitors, make more sales, boost conversions, and reduce cart abandonment, then you need Alertify.",
  },
];

export default function Faq() {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="flex flex-row pt-20 pb-11 px-16 fontRubik">
      <div className="w-0 lg:w-1/2 hidden lg:flex">
        <img src={faqIcon} className=""/>
      </div>
      <div className="w-full lg:w-1/2 p-6">
        <p className="text-lg font-normal">Why Choose Us</p>
        <h2 className="text-3xl font-bold mb-6">
          Frequently Asked Questions and Resources
        </h2>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className={`flex justify-between py-4 px-5 border rounded-xl ${
                activeIndexes.includes(index)
                  ? "text-white bg-blue-700"
                  : "bg-white text-gray-700 shadow-md"
              } focus:outline-none`}
            >
              <button
                className="w-full text-left text-lg font-normal"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {activeIndexes.includes(index) ? (
                <div className="text-2xl font-normal">-</div>
              ) : (
                <div className="text-2xl font-normal">+</div>
              )}
            </div>
            <div
              className={`duration-1000 ease-linear overflow-hidden ${
                activeIndexes.includes(index)
                  ? "max-h-screen"
                  : "max-h-0"
              }`}
            >
              <div className="p-4 text-black text-lg font-normal">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
