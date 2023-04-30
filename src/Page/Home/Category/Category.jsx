import NewsCard from "../NewsCard/NewsCard";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {

    const {id}=useParams();

    const categoryNewsLoad = useLoaderData();

    return (
        <div>
            {id && <h2> category : {categoryNewsLoad.length}</h2>}
            {
                categoryNewsLoad.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;<h2>thi is category</h2>