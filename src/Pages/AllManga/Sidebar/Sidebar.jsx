import Category from "./Category/Category";
// import Price from "./Price/Price";
import "../../../Component/Styles/Sidebar.css";

const Sidebar = ({ handleChange }) => {

   console.log(handleChange)
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
