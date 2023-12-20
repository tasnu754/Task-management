import { HiOutlineHomeModern } from "react-icons/hi2";
import { BiMessageAltDetail } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { GiPartyPopper } from "react-icons/gi";

const Benefit = () => {
  return (
    <div>
      <div>
        <div
          data-aos="zoom-in-down"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-offset="200"
          className=" py-24 space-y-16 bg-gradient-to-b from-[#6b6b83] to-[#3b8d99] text-white"
        >
          <div className="space-y-10 md:px-10 ">
            <h1 className="text-3xl lg:text-5xl font-bold text-center">
              {" "}
              <span className="text-yellow-500">Hello!</span> We Are a Task
              Managment agency
            </h1>
            <p className="text-base lg:text-lg font-bold text-center w-[300px] md:w-[500px] lg:w-[800px] mx-auto text-gray-800">
              Task management websites or systems are versatile tools that can
              be beneficial for a wide range of individuals and groups across
              various industries.Task management systems can benefit anyone
              looking to enhance organization, efficiency, and collaboration in
              their personal or professional endeavors. They provide a
              centralized platform for planning, tracking, and completing tasks,
              making them valuable tools in various contexts.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6  gap-10">
            <div className="space-y-4">
              <div className="flex justify-center">
                <HiOutlineHomeModern className="text-red-600 text-3xl text-center"></HiOutlineHomeModern>
              </div>
              <p className=" text-base font-bold text-center">Developers</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <BiMessageAltDetail className="text-red-600 text-3xl"></BiMessageAltDetail>
              </div>
              <p className="text-base font-bold">Freelancers</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <TfiWrite className="text-red-600 text-3xl"></TfiWrite>
              </div>
              <p className="text-base font-bold">Executives and Managers</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <GiPartyPopper className="text-red-600 text-3xl"></GiPartyPopper>
              </div>
              <p className="text-base font-bold">Remote Workers</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <HiOutlineHomeModern className="text-red-600 text-3xl text-center"></HiOutlineHomeModern>
              </div>
              <p className=" text-base font-bold text-center">Event Planners</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <HiOutlineHomeModern className="text-red-600 text-3xl text-center"></HiOutlineHomeModern>
              </div>
              <p className=" text-base font-bold text-center">Entrepreneurs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
