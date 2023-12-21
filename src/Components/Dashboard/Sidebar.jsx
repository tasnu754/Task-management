import { useContext, useState } from "react";
import { AuthProvider } from "../Authenticate";
import { IoIosLogOut } from "react-icons/io";
import MenuItem from "../MenuItem";
import { FaTasks } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { CgProfile } from "react-icons/cg";


const Sidebar = () => {
    const { logout } = useContext(AuthProvider);
    const [isActive, setActive] = useState(false);
     const handleToggle = () => {
       setActive(!isActive);
    };
    
     const handleSignout = () => {
       logout()
         .then(() => {})
         .catch((error) => console.log(error));
     };
    

    return (
      <>
        {/* Small device  */}
        <div className=" bg-gray-100 text-gray-800 flex justify-between md:hidden">
          <div>
            <div className="block cursor-pointer p-4 font-bold text-xl text-yellow-800">
              Desdiny Duos
            </div>
          </div>

          <button
            onClick={handleToggle}
            className="p-4 focus:outline-none focus:bg-gray-200"
          >
            {/* <IoMdMenu className="h-5 w-5"></IoMdMenu> */}
          </button>
        </div>

        {/* Big Device  */}
        <div
          className={`z-10 md:fixed h-full flex flex-col justify-between overflow-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 ${
            isActive && " -translate-x-full absolute "
          }  md:translate-x-0 transition duration-200 ease-in-out `}
        >
          <div>
            <MenuItem
              label="Your Profile"
              address="profile"
              icon={CgProfile}
            ></MenuItem>
            <MenuItem
              label="Create/Edit Task"
              address="editTask"
              icon={IoIosCreate}
            ></MenuItem>

            <MenuItem
              label="View Tasks"
              address="viewTasks"
              icon={FaTasks}
            ></MenuItem>
          </div>
          <hr />

          <div className="flex items-center  transition-colors duration-300 transform hover:bg-gray-300  text-gray-700">
            <button
              onClick={handleSignout}
              className="flex justify-center items-center p-4 "
            >
              <IoIosLogOut className="w-7 h-7 "></IoIosLogOut>
              <span className="mx-4 font-medium text-xl">Logout</span>
            </button>
          </div>
        </div>
      </>
    );
};

export default Sidebar;