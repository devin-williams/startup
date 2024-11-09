import React from 'react';

const Realtime = () => (
  <main>
    <div className="container">
      <div className="chat-window">
        <div className="chat-header">
          <h2>Live Chat</h2>
        </div>
        <div className="chat-messages">
          <div className="message help-rep">
            <span className="user">John Doe:</span>
            <span className="text">Hello! How can I help you today?</span>
          </div>
          <div className="message user">
            <span className="user">Jane Smith:</span>
            <span className="text">I need assistance with my account.</span>
          </div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your message here..." />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  </main>
);

export default Realtime;