import messageImg from "../assets/message_img.svg";

import checkImg from "../assets/check.svg";

export default function Playbooks() {
  const list = [
    {
      text: "Send notifications with just one click",
    },
    {
      text: "Schedule and send recurring notifications",
    },
    {
      text: "Share editorial access with your team",
    },
    {
      text: "Track and analyze campaigns and see what works",
    },
  ];

  return ( 
    <div className="bg-blue-50">
      <div className="playbook_bg pt-40 pb-40 lg:pt-96 lg:pb-52 px-16 flex flex-row">
        <div className="hidden lg:flex w-0  lg:w-1/2">
          <img src={messageImg} alt="messageImg" />
        </div>

        <div className=" w-full lg:w-1/2 text-white px-4">
          <p className=" text-lg">Playbooks</p>
          <h1 className=" font-bold text-4xl">
            Send the right message, at the right time
          </h1>
          <p className=" font-base text-xl py-10">
            Empower website owners with our platform&apos;s secure, intuitive
            alert management system, enriched with advanced analytics for
            insightful performance tracking.
          </p>

          {list.map((list, index) => (
            <div className=" flex flex-row py-4" key={index}>
              <img src={checkImg} alt="checkImg" className="px-2" />
              <p className=" font-normal text-xl">{list.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
