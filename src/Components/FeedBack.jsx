import { FcCustomerSupport } from "react-icons/fc";
import { FaRegThumbsUp } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

const FeedBack = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-5xl font-bold p-10 text-center">
          Our Customers Love What We Do
        </h1>
        <p className="text-center text-2xl font-bold">Discover Your Feedback</p>
      </div>

      <div className="w-[90%] mx-auto grid  grid-cols-1  lg:grid-cols-3 py-10 gap-6 ">
        <div className="card w-full bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <FcCustomerSupport className="text-6xl"></FcCustomerSupport>
          </figure>
          <div className="card-body items-center text-center">
            <input
              type="text"
              placeholder="File a Complain"
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <div className="card-actions">
              <button className="btn btn-primary mt-4">Submit</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <FaRegThumbsUp className="text-6xl"></FaRegThumbsUp>
          </figure>
          <div className="card-body items-center text-center">
            <input
              type="text"
              placeholder="Give a Complement"
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <div className="card-actions">
              <button className="btn btn-primary mt-4">Submit</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <VscFeedback className="text-6xl"></VscFeedback>
          </figure>
          <div className="card-body items-center text-center">
            <input
              type="text"
              placeholder="Share Product Feedback"
              className="input input-bordered input-primary w-full max-w-xs"
            />

            <div className="card-actions">
              <button className="btn btn-primary mt-4">Submit</button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default FeedBack;
