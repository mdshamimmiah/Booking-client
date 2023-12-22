import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navber = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {user , logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() => console.log('user logged out successfully'))
    .catch(error => console.error (error))
  }
    const navlinks = <>
    <div className='flex gap-2'>
        <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/'>Home Page</NavLink></li>
        <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/developer'>Developer Section</NavLink></li>
        <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/banker'>Banker Section</NavLink></li>
        <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/corporate'>Corporate Professional Section</NavLink></li>
        <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/login'>Login</NavLink></li>
        <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/register'>Register</NavLink></li>
        {/* <li className="shadow-[#f72e05]	shadow-2xl bg-black text-white"><NavLink to='/dashboard'>Dashboard</NavLink></li> */}
        </div>

                        </>
    return (
        <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlinks}
            </ul>
          </div>
          <img className='w-12' src="https://i.ibb.co/2ysLFNj/logo.jpg" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
           user? <>


<a onClick={handleLogOut} className="btn btn-sm rounded-full bg-black text-white shadow-[#f72e05]	shadow-2xl mr-2">Sign Out</a>

              <div className="">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} />

                                        </div>
                                    </label>

                                </div>
          
           </> : <Link to='/login'className="shadow-[#f72e05]	shadow-2xl bg-black text-white btn btn-sm rounded-full">Login</Link>
          }
         
        </div>
      </div>
    );
};

export default Navber;