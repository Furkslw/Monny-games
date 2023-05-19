import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);

  let server = "https://apiv3.humoq.com/";
  let domainId = 16;
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
  return categories;
};

export default useFetchCategories;
