import "./Register.css";
import { imgbbUploader } from "imgbb-uploader";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Component/AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import Swal from "sweetalert2";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile, reset } =
    useContext(AuthContext);
    const [photo, setPhoto] = useState([])
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [error, setError] = useState("");

  const handleSubmit = (event) => {

      imgbbUploader({
        apiKey:"const image_hosting_api",
        imageUrl:"https://akashmittal.com/wp-content/uploads/2020/10/site-logo-small.png"
      })
        .then((response) => setPhoto(response))
        .catch((error) => setData(error));
    }
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;


  

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(name, photo)
        .then(() => {
          const userInfo = {
            name: name,
            email: email,
            photo: photo,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User successfully register",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  const handleGoogleRegister = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photo: result.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="grid grid-flow-col gap-20 ">
        <div className="flex justify-center items-center">
          <img
            className="h-80 w-fit rounded-bl-full"
            src="https://i.ibb.co/ng6HcYM/one-piece-anime.jpg"
            alt=""
          />
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="form h-3/4">
            <div className="title">
              Welcome,
              <br />
              <span>sign up to continue</span>
            </div>
            <input
              className="input"
              name="name"
              placeholder="Full Name"
              type="text"
            />
            <input
              className="input"
              name="email"
              placeholder="Email"
              type="email"
            />
            <input
              className="input"
              name="password"
              placeholder="Password"
              type="password"
            />
            <input
              className="input"
              name="photo"
              placeholder="file"
              type="file"
            />
            <div className="login-with">
              <div onClick={handleGoogleRegister} className="button-log">
                <b>G</b>
              </div>
              <div className="button-log">
                <b>t</b>
              </div>
            </div>
            <div className="px-5 pb-5 flex gap-5">
              <button className="button-confirm">Let`s go →</button>
              <Link to="/login">
                <button className="button-confirm">Sign in →</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
