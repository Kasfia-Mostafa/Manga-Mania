import Category from "./Category/Category";
// import Price from "./Price/Price";
import "../../../Component/Styles/Sidebar.css";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";

const Sidebar = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedGerner, setSelectedGenre] = useState([]);

  useEffect(() => {
    axiosPublic.get("/mangas")
    .then((res) => setSelectedGenre(res.data));
  }, []);

    const handleChange = (event) => {
      setSelectedGenre(event.target.value);
  };

  return (
    <>
      <section className="sidebar">
        <Category handleChange={handleChange} />
        {/* <Price handleChange={handleChange} /> */}
      </section>
    </>
  );
};

export default Sidebar;
