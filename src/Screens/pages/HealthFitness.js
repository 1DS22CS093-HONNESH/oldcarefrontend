import React, { useState } from 'react';
import './styles/HealthFitness.css';

const fetchAIResponse = async (userInput) => {
  try {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userInput })
    });
    const data = await response.json();
    return data.reply;
  } catch (err) {
    console.error(err);
    return "Sorry, I had trouble fetching a response. Please try again!";
  }
};

const HealthFitness = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hello! I’m your AI health & fitness assistant. Ask me anything about exercises, diets, or wellness!" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { from: 'user', text: input }]);

    const aiReply = await fetchAIResponse(input);

    setMessages(prev => [...prev, { from: 'user', text: input }, { from: 'bot', text: aiReply }]);
    setInput('');
  };

  return (
    <div className="health-fitness-container">
      <h2 className="section-heading">AI Health & Fitness Assistant</h2>

      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.from}`}>
            <strong>{msg.from === 'bot' ? '🤖' : '🧑'}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask me about health & fitness..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default HealthFitness;
