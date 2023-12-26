import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='grid grid-flow-col gap-20 '>
      <div className='flex justify-center items-center'>
        <img className='h-80 w-fit rounded-bl-full'  src="https://i.ibb.co/ng6HcYM/one-piece-anime.jpg" alt="" />
      </div>
      <div>
      <form className='form'>
  <div className="title">Welcome,<br /><span>sign up to continue</span></div>
  <input className="input" name="email" placeholder="Email" type="email" />
  <input className="input" name="password" placeholder="Password" type="password" />
  <div className="login-with">
    <div className="button-log"><b>G</b></div>
    <div className="button-log"><b>t</b></div>
  </div>
  <div className='px-5 flex gap-5'>
  <button className="button-confirm">Let`s go →</button>
  <Link to='/register'><button className="button-confirm">Register →</button></Link>
  </div>
  </form>
      </div>
     
    </div>
    </div>

  );
};

export default Login;