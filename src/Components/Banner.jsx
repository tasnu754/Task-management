import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/8c42sM3/20827912-Students-or-employees-adding-events-or-deadlines-to-calendar-app.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-4xl font-bold">
                Empower Your Productivity
              </h1>
              <p className="mb-5 text-xl font-bold">
                Effortless Task Mastery: Unleashing the Power of Task Management
                System
              </p>
              <Link to='/signin'>
                <button className="btn btn-accent font-bold text-lg">
                  Let`s Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;