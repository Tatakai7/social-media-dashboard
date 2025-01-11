import axios from "axios";

const fetchInstagramData = async (query) => {
  const response = await axios.get(
    `https://graph.instagram.com/v12.0/ig_hashtag_search?user_id=YOUR_USER_ID&q=${query}&access_token=${process.env.REACT_APP_INSTAGRAM_API_KEY}`
  );

  const hashtagId = response.data.data[0].id;

  const mediaResponse = await axios.get(
    `https://graph.instagram.com/v12.0/${hashtagId}/recent_media?user_id=YOUR_USER_ID&fields=id,caption,media_url,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_API_KEY}`
  );

  return mediaResponse.data;
};

export default fetchInstagramData;