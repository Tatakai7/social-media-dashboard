import React from "react";

function DashboardCard({ platform, data }) {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-semibold">{platform}</h2>
      <p className="text-gray-600">Followers: {data.followers}</p>
      <p className="text-gray-600">Posts: {data.posts}</p>
    </div>
  );
}

export default DashboardCard;
