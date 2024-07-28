import React, { useState, useEffect } from "react";
import "../styles/global.css";

const SplashScreen = () => {
  const [text, setText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const fullText = "Advanced Task Management System";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
        setIsTypingDone(true);
      }
    }, 100); // Adjust speed here (lower number = faster)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="splash-screen-content">
      <h1 className={`title ${isTypingDone ? "color-change" : ""}`}>{text}</h1>
    </div>
  );
};

export default SplashScreen;
