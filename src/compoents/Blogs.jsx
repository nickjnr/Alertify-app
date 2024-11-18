import blogImg from "../assets/blogImg.svg";

import userIcon from "../assets/userIcon.svg";
import commentIcon from "../assets/commentIcon.svg";
import arrowIcon from "../assets/Features/arrowIcon.svg";

const blogsList = [
  {
    image: blogImg,
    title: "Happy business people as talking to each other while working",
    author: "Admin",
    comments: 12,
  },
  {
    image: blogImg,
    title: "Happy business people as talking to each other while working",
    author: "Admin",
    comments: 12,
  },
  {
    image: blogImg,
    title: "Happy business people as talking to each other while working",
    author: "Admin",
    comments: 12,
  },
];

export default function Blogs() {
  return (
    <div className="bg-blue-50 pt-10 px-3 pb-16">
      <h2 className="text-lg font-normal text-center pb-4">Our Blogs</h2>
      <h3 className="text-3xl font-bold text-center pb-8">
        Our Latest Update News
      </h3>
      <div className=" text-xl font=normal w-3/4 mx-auto text-center pb-12">
        <p>
          Discover insightful articles in our blog, covering industry trends,
          best practices, and tips to maximize the impact of your alert messages
          and website engagement.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-40">
        {blogsList.map((update, index) => (
          <div key={index} className="w-full bg-white rounded-lg shadow-md">
            <img
              src={update.image}
              alt={update.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <div className="flex flex-row mb-2">
                <img className="px-2" src={userIcon} alt="userIcon" />
                <span className="">{update.author}</span>
                <img className="px-3" src={commentIcon} alt="commentIcon" />
                <span className="">{update.comments} Comments</span>
              </div>
              <h3 className=" text-xl font-medium pb-5 border-b-2">
                {update.title}
              </h3>
              <div className=" font-medium text-xl text-gray-500 transition-transform transform hover:translate-x-4 hover:text-blue-600 py-5 flex flex-row">
                <a href="#">Read More </a>
                <img src={arrowIcon} alt="ArrowIcon" className=" px-2 pt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
