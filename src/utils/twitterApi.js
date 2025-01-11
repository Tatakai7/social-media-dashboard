import axios from "axios";

const fetchTwitterData = async (query) => {
  const response = await axios.get(
    "https://api.twitter.com/2/tweets/search/recent", {
        params: {
            query: query,
            "tweet.fields": "created_at,author_id",
            "user.fields": "username",
            "max_results": 10,
        },
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_TWITTER_API_KEY}`
        }
    }
  );

  return response.data;
};

export default fetchTwitterData;