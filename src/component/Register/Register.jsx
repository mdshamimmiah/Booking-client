import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/undraw_access_account_re_8spm.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import {  toast  } from 'react-toastify';


const Register = () => {
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const [error, setError] = useState();
 
  const navigate = useNavigate();
  const location = useLocation();
 
   
  

// console.log(createUser);


    const handleRegister = e =>{
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name,email,photo,password);

        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/.test(password)) {
          setError("Minimum six characters, at least one letter, one number and one special character");
          toast.success("Minimum six characters, at least one letter, one number and one special character");
        }
    else{
          // create user from fire base
          createUser(email,password)
          .then(result =>{
            console.log(result.user);
            toast.success("User create successfully!");
            updateUserInfo({
              displayName:name,
              photoURL : photo
            })
          
          })
          .catch(error =>{
            console.error(error);
          
          })
    }
    navigate(location?.state ? location?.state : "/")
    }
    return (
        <div>
          <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row ">
    <img className='w-[300px] shadow-[#f72e05]	shadow-2xl mt-20 ' src={img} alt="" />
   
  <div>
  <h1 className="text-5xl font-bold text-white mb-6 text-center shadow-[#f72e05]	shadow-2xl">Register now!</h1>
  <div className="card shrink-0 w-[500px] max-w-sm shadow-[#f72e05]	shadow-2xl  bg-black rounded-none">
  
  <form onSubmit={handleRegister} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" name='email' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      <input type="url" placeholder="Photo URL" name='photo' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name='password' className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button type='submit' className="btn btn-primary">Register</button>
    </div>
  </form>
<p className='text-center text-blue-600'>Already have an account? Please <Link to='/login'><button className='btn btn-outline text-white mb-4'>Login</button></Link></p>
    </div>
</div>
  </div>
  </div>
 
  
</div>
      
    );
};

export default Register;