import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchCategories = () => {
  const getCategories = async () => {
    return axios.get(
      `${
        process.env.HUMOQ_API_URL
      }/api/v1/games/category/${id}/?domain_id=${16}`
    );
  };
  return { getCategories };
};

export default useFetchCategories;
