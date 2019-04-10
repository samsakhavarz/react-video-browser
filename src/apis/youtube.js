import axios from "axios";

const KEY = "AIzaSyDsl_u3oNTJCcz1dja_RT3PXtsyfyIVutU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
