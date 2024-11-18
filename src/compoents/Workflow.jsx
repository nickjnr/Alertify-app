import '../App.css'
import workflowTop from '../assets/Features/featurebg.svg'

import workflowIcon1 from '../assets/workflowIcon1.svg';
import workflowIcon2 from '../assets/workflowIcon2.svg';
import workflowIcon3 from '../assets/workflowIcon3.svg';
import workflowIcon4 from '../assets/workflowIcon4.svg';

const cardData = [
    {
        "title": "Sign Up",
        "description": "Register to Alertify and log in using your credentials.",
        "icon": workflowIcon1,
    },
    {
        "title": "Create Project",
        "description": "Fill in the details of your projects. Add as many projects as you want.",
        "icon": workflowIcon2,
    },
    {
        "title": "Integrate Code",
        "description": "Integrate code within just a few seconds.",
        "icon": workflowIcon3,
    },
    {
        "title": "Send a Notification",
        "description": "You send your notifications, we will take care of ads revenue.",
        "icon": workflowIcon4,
    }
];

export default function Workflow (){
    return (
        <div className="bg-white">
            <img className="w-full" src={workflowTop} alt="workflowTop" />
            <div className="p-10 custom_bg workflow_bg">
                <div className="text-center w-3/4 m-auto pb-10">
                    <h2 className="text-lg font-normal">How it Works</h2>
                    <p className="text-4xl font-bold">Streamlined Workflow Overview</p>
                    <p className="text-gray-600 font-normal text-xl">Explore our intuitive platform&apos;s seamless workflow, simplifying alert creation, management, and analytics for enhanced website engagement.</p>
                </div>
                <div className="flex flex-wrap gap-5 justify-center">
                    {cardData.map((card, index) => (
                        <div key={index} className="bg-white sm:w-full md:w-1/2 lg:w-1/5 pt-8 pb-10 px-5 rounded-lg shadow-md text-center">
                            <div className="flex justify-center mb-4">
                                <div className="p-4">
                                    <img src={card.icon} alt={`${card.title} Icon`} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-medium">{card.title}</h3>
                            <p className="text-lg font-normal">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
