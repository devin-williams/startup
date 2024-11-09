import React, { useState } from 'react';

const Realtime = () => {
  const [messages, setMessages] = useState([
    { user: 'John Doe', text: 'Hello! How can I help you today?', type: 'help-rep' },
    { user: 'Jane Smith', text: 'I need assistance with my account.', type: 'user' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { user: 'You', text: input, type: 'user' }]);
      setInput('');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <main>
      <div className="container">
        <div className="chat-window">
          <div className="chat-header">
            <h2>Live Chat</h2>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <span className="user">{message.user}:</span>
                <span className="text">{message.text}</span>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message here..."
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button className="send-button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Realtime;