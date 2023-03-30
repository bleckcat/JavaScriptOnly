import React from "react";
import SideBar from "./components/SideBar";
import BroadcastChannelUsage from "./components/WebAPIs/BroadcastChannelUsage";

function App() {
  return (
    <main className="main">
      <SideBar />
      <BroadcastChannelUsage />
    </main>
  );
}

export default App;
