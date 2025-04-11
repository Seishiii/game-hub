import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6a17655994e84023bf2cb40d995c4cf1",
  },
});
