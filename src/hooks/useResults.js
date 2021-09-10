import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });

      setResults(response.data.businesses);
    } catch (err) {
      //   console.log(err);
      setErrorMessage("Something went wrong");
    }
  };

  //Call searchApi when component
  //is first rendered. BAD CODE!

  useEffect(() => {
    searchApi("pasta");

    // console.log(results, "---testttt---");
  }, []);

  return [searchApi, results, errorMessage];
};
