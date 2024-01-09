import "./Category.css";
import Input from "../input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Genre</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          {/* <span className="checkmark"></span>All */}
        </label>
        <Input
          handleChange={handleChange}
          value="Adventure"
          title="Adventure"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Romance"
          title="Romance"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Thriller"
          title="Thriller"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Slice of Life"
          title="Slice of Life"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;