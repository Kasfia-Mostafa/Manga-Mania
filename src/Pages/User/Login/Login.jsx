import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Component/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      if ((email, password)) {
        signIn(email, password)
          .then((result) => {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Login successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => {
            setError(error.massage);
          });
      }
    
    };
  


  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='grid grid-flow-col gap-20 '>
      <div className='flex justify-center items-center'>
        <img className='h-80 w-fit rounded-bl-full'  src="https://i.ibb.co/ng6HcYM/one-piece-anime.jpg" alt="" />
      </div>
      <div>
      <form onSubmit={handleLogin} className='form'>
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