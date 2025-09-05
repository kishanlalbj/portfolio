import { useEffect, useRef, useState } from "react";

const GptResponse = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  const index = useRef(0);

  useEffect(() => {
    setDisplayed("");
    index.current = 0;

    if (!text) return;

    const interval = setInterval(() => {
      if (index.current < text.length) {
        setDisplayed((prev) => prev + text.charAt(index.current));
        index.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p
      style={{
        marginTop: "24px",
        fontFamily: "'Fira Mono', 'Consolas', monospace",
        fontSize: "1.1rem",
        color: "var(--gpt-response-color)",
        minHeight: "1.5em",
        wordBreak: "break-word",
        whiteSpace: "pre-wrap",
        display: "block",
        maxWidth: "100%",
        paddingRight: "4px",
        boxSizing: "border-box",
        animation:
          displayed.length < (text ? text.length : 0)
            ? "blink-caret 0.75s step-end infinite"
            : "none"
      }}
    >
      {displayed}
      {displayed.length < (text ? text.length : 0) && (
        <span style={{ borderRight: "2px solid #4ade80" }}>&nbsp;</span>
      )}
      <style>
        {`
          @keyframes blink-caret {
            0%, 100% { border-color: transparent }
            50% { border-color: #4ade80 }
          }
        `}
      </style>
    </p>
  );
};

export default GptResponse;
