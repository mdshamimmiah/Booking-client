import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/undraw_access_account_re_8spm.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        signInUser(email, password)
        .then(result=>{
          console.log(result?.user);
          toast.success("User Login successfully!");
        })
        .catch(error => {
          console.error(error)
    })
    navigate(location?.state ? location?.state : "/dashboard")
  }


  const handleGoogleSign = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user)
      Navigate(location?.state ?location?.state :"/")
    })
    .catch(error =>{
      console.error(error)
    })
    navigate(location?.state ? location?.state : "/dashboard")
  }
  
    return (
        <div>
          <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row ">
    <img className='w-[300px] shadow-[#f72e05]	shadow-2xl mt-4' src={img} alt="" />
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-white">Login now!</h1>
     
    </div>
    <div className="card shrink-0 w-[500px] max-w-sm shadow-[#f72e05]	shadow-2xl bg-black rounded-none">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
        
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
       
      </form>
      <p className='text-center text-blue-600 flex mx-auto'>New to website? Please <Link to='/register'><p className=' text-white ml-3 mb-4'>Register</p></Link></p>
       <button onClick={handleGoogleSign} className="btn btn-sm bg-black text-white p-0 m-4 w-[100px] mx-auto"><FcGoogle ></FcGoogle> Google </button>
   
    </div>

   
  </div>
  
</div>

        </div>
    );
};

export default Login;



{/* <button className='text-white btn btn-sm bg-black mx-auto w-[100px]'>Facebook</button> */}