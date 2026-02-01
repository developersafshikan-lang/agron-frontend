import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 السلام علیکم! میں Agron اسسٹنٹ ہوں۔" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      { role: "bot", text: "🤖 یہ demo جواب ہے — API بعد میں لگائیں" },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button className="chat-fab" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chat-widget">
          <div className="chat-header">
            <div>
              <strong>Agron Assistant</strong>
              <div className="status">Online</div>
            </div>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="اپنا سوال لکھیں..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
