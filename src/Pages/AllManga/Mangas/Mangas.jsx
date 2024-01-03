import { useEffect, useState } from "react";

import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import Pagination from "./Pagination";
import Manga from "./Manga";

const Mangas = () => {
  const axiosPublic = useAxiosPublic();
  const [mangas, setMangas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  

  useEffect(() => {
    axiosPublic.get("/mangas").then((res) => setMangas(res.data));
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = mangas.slice(firstPostIndex, lastPostIndex);

  return (
   <div>
     <div className="h-[100vh] grid grid-flow-col grid-cols-1 my-14">
      <div className="grid grid-cols-1">
        <h2 className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nihil
          suscipit vero aspernatur voluptatibus inventore animi? Sunt fuga
          officiis voluptate adipisci, modi, soluta consequatur nesciunt maxime
          dolor earum perspiciatis provident!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5 my-10">
        {currentPosts.map((manga) => (
         <Manga key={manga._id} manga={manga}></Manga>
        ))}
        <div>
        <Pagination
          totalPosts={mangas.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
      />
        </div>
      </div>
      
    </div>
   </div>
  );
};

export default Mangas;
