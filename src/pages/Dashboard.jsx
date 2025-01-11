import React from "react";
import Header from "../components/Header";
import PlatformAnalytics from "../components/PlatformAnalytics";

function Dashboard() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <PlatformAnalytics />
      </main>
    </div>
  );
}

export default Dashboard;
