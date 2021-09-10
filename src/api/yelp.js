import axios from "axios";

const urlProxy =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  //   baseURL: urlProxy,

  headers: {
    Authorization:
      "Bearer GSDy0CiaCFfiEUIGti7UE4QC6vXL7-ZgjZU_1FR7xXXPFWBW6XxL4QbcRu0d81Mv8Oqc2hz6yzVC16I1TVQy1msYLPmt9lhVYjbAnZj0X8vWZ1c_H-nr05RxijA4YXYx",
    // "Access-Control-Allow-Origin": "*",
    // accept: "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    // withCredentials: false,
  },
});
