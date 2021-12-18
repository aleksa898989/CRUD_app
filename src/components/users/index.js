import Listing from "./listing";
import { useEffect, useState } from "react";
import axios from "axios";

const ListingDataContainer = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const data = res.data;
      setData({ data });
    });
  }, []);
  let users = data?.data;
  return <Listing users={users} />;
};

export default ListingDataContainer;
