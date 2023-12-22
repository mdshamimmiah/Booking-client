import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const {user} = useContext(AuthContext)

    return (
        <div className="flex">
             <div className="w-64 min-h-screen bg-sky-400">
              
                    {
                       user?


                          
                    <>
                         
                                   
                                        <div className=" h-[50px] ml-0 lg:h-[100px] lg:ml-10 mb-12 lg:mb-6 lg:p-2 ">
                                            <img className=" rounded-full " src={user?.photoURL} />

                                        </div>
                            

                             
                        <li className="text-xs lg:text-lg"><NavLink to='/'> User Home</NavLink></li>
                        <li className="text-xs lg:text-lg"><NavLink to='/dashboard/newTask'> New Task</NavLink></li>
                        <li className="text-xs lg:text-lg"><NavLink to='/dashboard/previousTask'>To Do</NavLink></li>
                       
                      
                    </> : <p>asi</p>
                    } 
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;