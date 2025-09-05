import { useRef, useState } from "react";
import Title from "../components/ui/Title";
import "./ChatPage.css";
import GptResponse from "../components/GptResponse/GptResponse";

const RESUMEAI_AGENT_URL = import.meta.env.VITE_RESUMEAI_AGENT_URL;
const disabled = import.meta.env.VITE_CHAT_DISABLED === "true";

const ChatPage = () => {
  const inputRef = useRef(null);
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const askMe = async (question) => {
    try {
      setLoading(true);
      const res = await fetch(`${RESUMEAI_AGENT_URL}/ask?query=${question}`);
      const data = await res.json();
      if (res.ok) {
        setResponse(data.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    setQuestion(value);
    inputRef.current.value = "";
    await askMe(value);
  };

  let answerContent = null;

  if (disabled) {
    answerContent = (
      <p className="chat-response-loading">
        Chat is not available at the moment.
      </p>
    );
  } else if (loading) {
    answerContent = (
      <p className="chat-response-loading">{"\n\nThinking..."}</p>
    );
  } else {
    answerContent = <GptResponse text={response.trim()} />;
  }

  return (
    <div className="chat-page-container">
      <div className="chat-container">
        <Title text={"Chat with me"}></Title>
        <p className="chat-subtitle">
          Ask any questions related to my background
        </p>

        <form onSubmit={handleSubmit}>
          <input
            disabled={disabled}
            ref={inputRef}
            type="text"
            className="chat-input"
            placeholder="Ask me a question"
          ></input>
          <input type="submit" value={"submit"} hidden />
        </form>

        <section className="chat-answer-container">
          <h4>{question}</h4>

          {answerContent}
        </section>
      </div>
    </div>
  );
};

export default ChatPage;
