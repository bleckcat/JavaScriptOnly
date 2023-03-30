import React, { useEffect, useState } from "react";

const BroadcastChannelUsage: React.FC = (): JSX.Element => {
  const [broadcast, setBroadcast] = useState<BroadcastChannel>();
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setBroadcast(new BroadcastChannel("write_on_sidebar"));
  }, []);

  const handleBroadcast = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    broadcast?.postMessage(text);
  };

  const handleInput = (newText: string) => {
    setText(newText);
  };

  return (
    <div className="container">
      <h1>Broadcast Channel API</h1>
      <div className="divider" />
      <div className="content">
        <div className="content-text">
          <p>Want to write something in the sidebar?</p>
          <p>Try broadcasting your message here:</p>
        </div>
        <form>
          <input
            type="text"
            placeholder="Write something"
            className="generic-input"
            value={text}
            onChange={(e) => handleInput(e.target.value)}
          />
          <button
            type="submit"
            className="generic-button centered"
            onClick={(e) => handleBroadcast(e)}
          >
            Send broad cast
          </button>
        </form>
      </div>
    </div>
  );
};

export default BroadcastChannelUsage;
