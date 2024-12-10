import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const [messages, setMessages] = useState([
    { user: 'John Doe', text: 'Hello! How can I help you today?', type: 'help-rep' },
    { user: 'Jane Smith', text: 'I need assistance with my account.', type: 'user' },
  ]);
  const [input, setInput] = useState('');
  const ws = useRef(null);
  const navigate = useNavigate();
  const userType = localStorage.getItem('userType');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      navigate('/login');
    } else {
      if (!ws.current) {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        const socket = new WebSocket(`${protocol}://${window.location.hostname}:${window.location.port}/ws`);
        ws.current = socket;
        socket.onopen = () => {
          console.log('WebSocket connected');
        };
        socket.onmessage = (event) => {
          const message = JSON.parse(event.data);
          console.log('Received message:', message);
          setMessages((prevMessages) => [...prevMessages, message]);
        };
        socket.onclose = () => {
          console.log('WebSocket disconnected');
        };
      }
    }
  }, [navigate]);

  const handleSendMessage = () => {
    if (input.trim() !== '' && ws.current) {
      const message = { user: userType === 'help-rep' ? 'Admin' : 'You', text: input, type: userType };
      ws.current.send(JSON.stringify({ type: 'chat', ...message }));
      console.log('Sent message:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
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

export default Support;