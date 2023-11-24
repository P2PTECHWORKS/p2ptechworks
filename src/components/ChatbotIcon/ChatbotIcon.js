// ChatbotIcon.js

// ChatbotIcon.js

import React, { useState } from 'react';
import { FaCommentDots } from 'react-icons/fa';
import './ChatbotIcon.css';
import { IoCloseOutline, IoRocketOutline } from 'react-icons/io5';

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleToggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    const userMessage = { text: input, user: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    
    const backendURL = 'https://booming-premise-406113.el.r.appspot.com/';


    try {
      const response = await fetch(`${backendURL}/endpoint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: input }),
      });


      if (!response.ok) {
        throw new Error('Failed to fetch response from server');
      }

      const data = await response.json();
      const botResponse = { text: data.response, user: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error, display an error message, etc.
    }

    setInput('');
  };

  return (
    <div className={`chatbot-icon ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chat-header">
            <span>Chatbot</span>
            {/* Replace the 'Close' button with 'X' icon */}
            <IoCloseOutline size={24} onClick={handleToggleChatbot} className="close-icon" />
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.user === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
            />
            {/* Replace the 'Send' button with 'rocket' icon */}
            <IoRocketOutline size={24} onClick={handleSendMessage} className="send-icon" />
          </div>
        </div>
      )}
      <div className="icon-container" onClick={handleToggleChatbot}>
        <FaCommentDots size={30} />
      </div>
    </div>
  );
};

export default ChatbotIcon;


