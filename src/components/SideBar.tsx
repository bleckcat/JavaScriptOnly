import React, { useEffect, useState } from "react";

const SideBar: React.FC = (): JSX.Element => {
  const [broadcast, setBroadcast] = useState<BroadcastChannel>();
  const [broadcastMessage, setBroadcastMessage] = useState<String>();

  useEffect(() => {
    setBroadcast(new BroadcastChannel("write_on_sidebar"));
  }, []);

  broadcast?.addEventListener("message", (event) => {
    setBroadcastMessage(event.data);
  });

  return <div>{broadcastMessage}</div>;
};

export default SideBar;
