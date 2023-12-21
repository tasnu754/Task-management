import { useContext } from "react";
import { AuthProvider } from "../Authenticate";

const Profile = () => {
    const { user } = useContext(AuthProvider);
    console.log(user);
    return (
      <div>
        <div className="h-52 w-52 lg:w-[30%] mx-auto lg:h-[450px] overflow-hidden rounded-full">
          <img
            className="w-full  h-full object-cover"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <h2 className="md:text-5xl font-bold text-yellow-900 text-center pt-10">
          {user?.displayName}
        </h2>
        <h3 className="md:text-4xl font-bold text-yellow-900 text-center py-6">
          {user?.email}
        </h3>
      </div>
    );
};

export default Profile;