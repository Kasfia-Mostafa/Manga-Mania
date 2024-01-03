import { useEffect, useState } from "react";
import Manga from "./Manga";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";

const Mangas = () => {
  const axiosPublic = useAxiosPublic();
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    axiosPublic.get("/mangas").then((res) => setMangas(res.data));
  }, []);

  console.log(mangas);

  return (
    <div className=" grid grid-flow-col grid-cols-1">
      <div className="grid grid-cols-1">
        <h2 className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nihil
          suscipit vero aspernatur voluptatibus inventore animi? Sunt fuga
          officiis voluptate adipisci, modi, soluta consequatur nesciunt maxime
          dolor earum perspiciatis provident!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {mangas.map((manga) => (
          <Manga key={manga._id} manga={manga}></Manga>
        ))}
      </div>
    </div>
  );
};

export default Mangas;
