
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const NewTask = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
  const email = (user?.email);
    const axiosPublic = useAxiosPublic();

    const handleNewTask = (event) =>{
        event.preventDefault();

        const form = event.target;

        const titles = form.titles.value;
        const descriptions = form.descriptions.value;
        const deadlines =form.deadlines.value;
        const priority =form.priority.value;
       
        const addNewTask = {titles, deadlines, descriptions, priority, email}
    
        console.log(addNewTask);

            axiosPublic.post(`/createTask`,addNewTask)
            .then(res=>{
              console.log(res.data);
            toast.success("Task create successfully")

            })
            // ...
          .catch((error) => {
            // An error occurred
            console.error(error);
            // ...
          });




    }
    return (
        <div className="ml-6 w-full">
            <div className="hero min-h-screen bg-blue-300 ">
                <div className="hero-content flex-col l">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add New Task</h1>

                    </div>
                    <div className=" w-full bg-purple-500 rounded-none">
                        <form onSubmit={handleNewTask} className="card-body">
                            <div className="form-control">

                                <span className="label-text mb-3">Titles</span>
                                <input type="text" name="titles" placeholder="Titles" />

                                <label className="mt-3 mb-3" >Descriptions</label>
                                <input type="text" name="descriptions" placeholder="Descriptions" required />
                                {/* <div className="mb-4  w-full ">
                                <label className="block  text-md mt-2 mb-2 " htmlFor=""> Email </label>
                                <input className=" w-full text-white   " type="text" placeholder="" readOnly defaultValue={user?.email} name="email" required />
                            </div> */}
                            </div>

                            <div className="form-control">

                                <span className="label-text -mt-3 mb-3">Deadlines</span>
                                <input type="date" name="deadlines" placeholder="deadlines" />

                                <select name="priority"className="select select-bordered mt-3 w-full">
                                    <option className="mt-3 mb-3" disabled selected>Priority</option>
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                </select>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add New Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default NewTask;

