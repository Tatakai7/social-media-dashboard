import React, { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import fetchYoutubeData from "../utils/youtubeApi";
import fetchTwitterData from "../utils/twitterApi";
import fetchInstagramData from "../utils/instagramApi";

function PlatformAnalytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPlatformData()
      .then((response) => setData(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const fetchPlatformData = async () => {
    try {
      const youtubeData = await fetchYoutubeData("SolidJS tutorials");
      const twitterData = await fetchTwitterData("EngineX tutorials");
      const instagramData = await fetchInstagramData("SolidJS tutorials");
    
      const combinedData = [
        ...youtubeData.items.map(item => ({
          id: item.id.videoId,
          name: item.snippet.title,
          data: item.snippet.description,
          platform: "YouTube"
        })),
        ...twitterData.data.map(tweet => ({
          id: tweet.id,
          name: tweet.author_id,
          data: tweet.text,
          platform: "Twitter"
        })),
        ...instagramData.data.map(post => ({
            id: post.id,
            name: post.caption,
            data: post.media_url,
            platform: "Instagram"
          }))
      ];

      return combinedData;
    } catch (error) {
      console.error("Error fetching platform data:", error);
      return [];
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((platform) => (
        <DashboardCard key={platform.name} platform={platform.name} data={platform.data} />
      ))}
    </div>
  );
}

export default PlatformAnalytics;