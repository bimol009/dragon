import "./LeftNav.css";
import React, { useEffect, useState } from "react";
import SportsSection from "../SportsSection/SportsSection";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dragon-server-pearl.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="mb-4">All Category</h2>
      <button type="button" className="btn btn-secondary px-5 py-3 fw-bolder">
        National News
      </button>

      {categories.map((category) => (
        <p className="link-underLine mt-4 ms-4" key={categories.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}

      <SportsSection></SportsSection>
    </div>
  );
};

export default LeftNav;
