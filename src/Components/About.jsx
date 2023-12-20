
const About = () => {
    return (
      <div className="">
        <div className="">
          <div className="p-10 bg-gray-300">
            <h1 className="text-5xl font-bold">About Us</h1>
          </div>
          <div className="p-6 md:p-10 text-xl font-semibold">
            <p>
              A task management system is a software application or platform
              designed to help individuals, teams, or organizations organize,
              track, and manage their tasks and projects efficiently. It
              provides a centralized hub for planning, monitoring, and
              coordinating various activities, ensuring that work is completed
              in a systematic and organized manner.
            </p>
            <br />
            <img
              className="w-[70%] mx-auto h-[400px] md:h-[600px] my-10"
              src="https://i.ibb.co/xmGtL1C/6976404-4584.jpg"
              alt=""
            />
            <p>
              Users can create tasks, specifying details such as task name,
              description, due date, priority, and any relevant attachments.
              Tasks can be assigned to specific individuals or teams, defining
              responsibilities and ensuring accountability.
            </p>
            <p>
              Tasks can be categorized and organized based on projects,
              deadlines, or other criteria. Tags, labels, or custom fields may
              be used to further classify tasks and streamline navigation.
            </p>{" "}
            <br />
            <p>
              Users can track the status and progress of tasks in real-time.
              Visual indicators, such as task completion percentages or
              timelines, help users understand the overall progress of projects.
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;