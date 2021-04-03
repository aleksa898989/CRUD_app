import Listing from "./listing";
import { useEffect, useState } from "react";
import axios from "axios";

const ListingDataContainer = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const data = res.data;
      setData({ data });
    });
  }, []);
  let posts = data?.data;
  return (
    <>
      <Listing posts={posts} />
    </>
  );
};

export default ListingDataContainer;
