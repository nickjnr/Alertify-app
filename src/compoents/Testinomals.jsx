import testimonialIcon from "../assets/testinomalIcon.svg";
import invertedcommasIcon from "../assets/invertedcommasIcon.svg";
import yellowstarIcon from "../assets/yellowstarIcon.svg";

const testimonials = [
  {
    name: "John Doe",
    image: testimonialIcon,
    role: "Entrepreneur",
    text: "Working with this team has been a game changer for my business. The creativity, attention to detail, and dedication they bring to every project is unparalleled. I highly recommend their services.",
  },
  {
    name: "Jane Smith",
    image: testimonialIcon,
    role: "Marketing Director",
    text: "I’ve worked with several agencies before, but none have provided the level of service and results that this team delivers. Their expertise in digital marketing has helped us grow exponentially in a short period of time.",
  },
  {
    name: "Emily Johnson",
    image: testimonialIcon,
    role: "Freelance Writer",
    text: "As a freelancer, it’s important for me to collaborate with reliable and professional partners. This team not only delivered exactly what I needed but exceeded my expectations. I’m excited to work with them again in the future.",
  },
  // {
  //   name: "Michael Brown",
  //   image: testimonialIcon,
  //   role: "CEO of Tech Innovations",
  //   text: "From the first consultation to the final product, the entire process was seamless. The team provided strategic insights that helped our brand stand out in a competitive market. They’re now a critical part of our marketing strategy.",
  // },
  // {
  //   name: "Sophia Williams",
  //   image: testimonialIcon,
  //   role: "Product Manager",
  //   text: "The team brought fresh ideas and innovative solutions to the table. They understood our vision and delivered a product that not only met our needs but also captured the essence of our brand. Highly recommend them!",
  // },
  // {
  //   name: "James Wilson",
  //   image: testimonialIcon,
  //   role: "Photographer",
  //   text: "I’ve had the pleasure of working with this group on several projects. They’re not only professional and talented but also very responsive. They listen to feedback and incorporate it effectively into their work, which makes them a joy to collaborate with.",
  // },
];


const Testimonials = () => {
  return (
    <div className="p-40">
      <div className="bg-gray-900 text-white py-12 px-10 rounded-3xl">
        <div className="container mx-auto">
          <p className="text-center text-lg font-normal">Out Testimonials</p>
          <h2 className="text-center text-3xl font-bold pb-8">
            What Peoples Are Saying
          </h2>
          <div className="grid grid-col=1 md:grid-col-2 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="">
                <div className="bg-white bg-opacity-10 p-6 rounded-xl flex flex-col">
                <div className="flex flex-row mb-4">
                  <img src={yellowstarIcon} alt="star" className="w-6 h-6 mr-2" />
                  <img src={yellowstarIcon} alt="star" className="w-6 h-6 mr-2" />
                  <img src={yellowstarIcon} alt="star" className="w-6 h-6 mr-2" />
                  <img src={yellowstarIcon} alt="star" className="w-6 h-6 mr-2" />
                  <img src={yellowstarIcon} alt="star" className="w-6 h-6 mr-2" />
                </div>
                  <p className="text-lg font-normal py-4">{testimonial.text}</p>
                  <div className="flex justify-end">
                    <img
                      className="items-end"
                      src={invertedcommasIcon}
                      alt="invertedcommasIcon"
                    />
                  </div>
                </div>

                <div className="flex flex-row p-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-xl font-medium">{testimonial.name}</p>
                    <p className=" text-base font-normal">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
