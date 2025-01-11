import axios from "axios";

const fetchYoutubeData = async (query) => {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search", {
        params: {
            part: "snippet",
            q: query,
            key: process.env.REACT_APP_YOUTUBE_API_KEY,
        },
    }
);

  return response.data;
};
export default fetchYoutubeData;