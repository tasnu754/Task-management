import { useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";

const ViewTask = () => {
    const taskData = useLoaderData();
    const tasks = taskData.data;
    const [finaltasks, setFinalTasks] = useState(tasks);
    console.log(finaltasks , "iaoskhdfgoi");

    // const handleUpdate = (id) => {
    //        axios
    //          .put(`https://task-managment-server-ten.vercel.app/task/update${id}`, updatetask)
    //          .then((response) => {
    //            console.log(response.data);
    //            if (response.data.modifiedCount > 0) {
    //              swal("Food Updated!", "Successfully", "success");
    //            }
    //          })
    //          .catch((error) => {
    //            console.log(error);
    //          });
    // }

    const handleDelete = (id) => {
         swal({
           title: "Are you sure?",
           text: "It will delete permanently",
           icon: "warning",
           dangerMode: true,
         })
           .then((willDelete) => {
             if (willDelete) {
               axios
                 .delete(`https://task-managment-server-ten.vercel.app/task/delete/${id}`)
                 .then((res) => {
                   console.log(res);
                   if (res.data.deletedCount > 0) {
                     const remain = finaltasks.filter((task) => task._id != id);

                     swal(
                       "Deleted!",
                       "Your imaginary file has been deleted!",
                       "success"
                     );
                     setFinalTasks(remain);
                   }
                 });
             }
           })
           .catch((err) => console.log(err.message));
      
    }
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Priority</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {finaltasks.map((task, i) => (
                <tr key={i} className="text-lg">
                  <th>{i + 1}</th>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.deadline}</td>
                  <td>{task.priority}</td>

                  <td>
                    {" "}
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="hover:bg-gray-300 hover:text-gray-700 hover:rounded-md p-6"
                    >
                      <MdDeleteForever className="text-2xl"></MdDeleteForever>
                    </button>
                  </td>
                  <td>
                    <button
                    //   onClick={() => handleUpdate(task._id)}
                      className="hover:bg-gray-300 hover:text-gray-700 hover:rounded-md p-6"
                    >
                      <FaEdit className="text-xl"></FaEdit>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ViewTask;