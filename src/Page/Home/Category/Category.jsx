import NewsCard from "../NewsCard/NewsCard";
import React from "react";
import UseTitle from "../../hook/UseTitle";
import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {
  UseTitle("Category");

  const { id } = useParams();

  const categoryNewsLoad = useLoaderData();
  console.log(categoryNewsLoad);

  return (
    <div>
      
      {id && <h2> category : {categoryNewsLoad?.length}</h2>}
      {categoryNewsLoad &&
        categoryNewsLoad?.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
    </div>
  );
};

export default Category;
<h2>thi is category</h2>;
