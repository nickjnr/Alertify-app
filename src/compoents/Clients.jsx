import "../App.css";

import client1 from "../assets/clients/client1.svg";
import client2 from "../assets/clients/client2.svg";
import client3 from "../assets/clients/client3.svg";
import client4 from "../assets/clients/client4.svg";
import client5 from "../assets/clients/client5.svg";
import client6 from "../assets/clients/client6.svg";
import client7 from "../assets/clients/client7.svg";
import client8 from "../assets/clients/client8.svg";
import client9 from "../assets/clients/client9.svg";

import starIcon from "../assets/clients/staricon.svg";
import BlankstarIcon from "../assets/clients/stariconBlank.svg";

export default function Clients() {
  const clients = [
    { img: client1 },
    { img: client2 },
    { img: client3 },
    { img: client4 },
    { img: client4 },
    { img: client3 },
    { img: client5 },
    { img: client6 },
    { img: client7 },
    { img: client8 },
    { img: client9 },
  ];

  const firstRowClients = clients.slice(0, 5);
  const secondRowClients = clients.slice(5);

  return (
    <div className="fontRubik bg-white pt-10 pb-20">
      <div className="flex justify-center items-center">
        <p className="text-lg font-normal px-4">Trusted by 20,000+ clients</p>
        <img src={starIcon} alt="starIcon" />
        <img src={starIcon} alt="starIcon" />
        <img src={starIcon} alt="starIcon" />
        <img src={starIcon} alt="starIcon" />
        <img src={BlankstarIcon} alt="starIcon" />
      </div>
      <h1 className="text-center font-bold text-3xl">They Trust Us</h1>

      <div className="flex justify-center pt-10 pb-2">
        <div className="flex flex-wrap justify-center gap-4">
          {firstRowClients.map((client, index) => (
            <div
              className="bg-blue-100 bg-opacity-90 px-6 py-2 rounded-[55px] mx-4"
              key={index}
            >
              <img src={client.img} alt="client" className="m-2 w-20 h-12" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-2">
        <div className="flex flex-wrap justify-center gap-4">
          {secondRowClients.map((client, index) => (
            <div
              className="bg-blue-100 bg-opacity-90 px-6 py-2 rounded-[55px] mx-4"
              key={index + 5}
            >
              <img src={client.img} alt="client" className="m-2 w-20 h-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
