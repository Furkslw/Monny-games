import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchImage = (slug) => {
  const imageUrl = `https://assets.humoq.com/cdn-cgi/image/quality=78,fit=cover,f=auto,width=256/images/h140/${slug}.webp`;
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(imageUrl)
      .then((response) => {
        setImage(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return image;
};

export default useFetchImage;
