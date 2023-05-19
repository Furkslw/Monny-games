import React, { useEffect, useState } from "react";
import axios from "axios";

const useFindCategory = () => {
  const [category, setCategory] = useState([]);

  let server = "https://apiv3.humoq.com/"; // Your server url goes here
  let domainId = 16; // Your domain id goes here
  const category_url = `${server}/api/v1/categories?domain_id=${domainId}`;

  useEffect(() => {
    axios
      .get(category_url)
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  });
  return category;
};

export default useFindCategory;
