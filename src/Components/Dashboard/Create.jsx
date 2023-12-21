import axios from "axios";
import swal from "sweetalert";

const Create = () => {
    const handleAddTask = (e) => {
      e.preventDefault();
      const form = e.target;
      const title = form.title.value;
      const deadline = form.deadline.value;
      const priority = form.priority.value;
      const description = form.des.value;
      const task = {
        title,
        description,
        deadline,
        priority
       
      };
      form.reset();

        axios
          .post("https://task-managment-server-ten.vercel.app/addTask", task)
          .then((response) => {
            console.log(response.data);
            if (response.data.insertedId) {
              swal("Task added!", "Successfully", "success");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    };
    return (
      <div>
        <section className="bg-white ] dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-5xl font-bold text-[#53346D] dark:text-white text-center">
              CreateTask
            </h2>
            <form onSubmit={handleAddTask} action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Task Tilte
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Deadlines
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    id="deadline"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="priority"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Priority
                  </label>
                  <select
                    id="priority"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select priority</option>
                    <option value="High">High</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-xl font-medium text-[#53346D] dark:text-white"
                  >
                    Short Description
                  </label>
                  <textarea
                    name="des"
                    id="description"
                    rows={5}
                    className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Task description here"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="w-[80%] mx-auto">
                <button type="submit" className="btn btn-nav md:w-full">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
};

export default Create;