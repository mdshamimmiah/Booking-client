
// import { toast } from "react-toastify";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// import { toast } from "react-toastify";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Update = () => {
const {_id } = useParams();
console.log(_id);
   

const [data, setData] = useState([]);
const axiosPublic = useAxiosPublic();
useEffect(() => {

    axiosPublic.get('/updateTask')
        .then(res => setData(res.data))
        
}, [])
const {title, deadline, description, priority} = data;
console.log("id id id",_id);
    const { user } = useContext(AuthContext);
    // console.log(user);
  const email = (user?.email);

    const handleUpdate = async(event) =>{
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const deadline =form.deadline.value;
        const priority =form.priority.value;
       
        const update = {title, deadline, description, priority, email}
    
        console.log(update);
        
    try {
        const response = await axios.patch(`http://localhost:5000/update/${_id}`,update);
        const data = response.data;
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: update.taskName,
            text: 'Job Updated successfully!',
          });
        }
      } catch (error) {
        console.error('Error updating task:', error);
      }
    };
    

    return (
        <div className="ml-6 w-full">
            <div className="hero min-h-screen bg-blue-300 ">
                <div className="hero-content flex-col l">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update</h1>

                    </div>
                    <div className=" w-full bg-purple-500 rounded-none">
                        <form onSubmit={handleUpdate} className="card-body">
                            <div className="form-control">

                                <span className="label-text mb-3">Titles</span>
                                <input type="text" name="title" defaultValue={title} placeholder="Titles" />

                                <label className="mt-3 mb-3" >Descriptions</label>
                                <input type="text" defaultValue={description} name="description" placeholder="Descriptions" required />
                                {/* <div className="mb-4  w-full ">
                                <label className="block  text-md mt-2 mb-2 " htmlFor=""> Email </label>
                                <input className=" w-full text-white   " type="text" placeholder="" readOnly defaultValue={user?.email} name="email" required />
                            </div> */}
                            </div>

                            <div className="form-control">

                                <span className="label-text -mt-3 mb-3">Deadlines</span>
                                <input type="date" name="deadline" defaultValue={deadline} placeholder="deadlines" />

                                <select name="priority" defaultValue={priority} className="select select-bordered mt-3 w-full">
                                    <option className="mt-3 mb-3" disabled selected>Priority</option>
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                </select>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Update;

