import { Link } from "react-router-dom";
import './Register.css'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const Register = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='grid grid-flow-col gap-20 '>
      <div className='flex justify-center items-center'>
        <img className='h-80 w-fit rounded-bl-full'  src="https://i.ibb.co/ng6HcYM/one-piece-anime.jpg" alt="" />
      </div>
      <div className="">
      <form className='form h-3/4'>
  <div className="title">Welcome,<br /><span>sign up to continue</span></div>
  <input className="input" name="name" placeholder="Full Name" type="text" />
  <input className="input" name="email" placeholder="Email" type="email" />
  <input className="input" name="password" placeholder="Password" type="password" />
  <input className="input" name="password" placeholder="Password" type="password" />
  <button>
  <span className="button_top">Add Photo</span>
</button>
  <div className="login-with">
    <div className="button-log"><b>G</b></div>
    <div className="button-log"><b>t</b></div>
  </div>
  <div className='px-5 pb-5 flex gap-5'>
  <button className="button-confirm">Let`s go →</button>
  <Link to='/login'><button className="button-confirm">Login →</button></Link>
  </div>
  </form>
      </div>
     
    </div>
    </div>

  );
};

export default Register;