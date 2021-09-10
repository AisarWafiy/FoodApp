import axios from "axios";

const urlProxy =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  //   baseURL: urlProxy,
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    // "Access-Control-Allow-Origin": "*",
    // accept: "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    // withCredentials: false,
  },
});
