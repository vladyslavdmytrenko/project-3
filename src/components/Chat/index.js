import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Form from './Form';
import MessageList from './List';

import style from './Chat.module.css';

const INIT_VALUE = [
  {
    id: 'system',
    message: 'Hi! How can I help you?',
  },
];

const InitChat = (props) => {
  const handlerOpen = () => props.onShow();
  return (
    <h1 className={style.init_container} onClick={handlerOpen}>
      Need help?
    </h1>
  );
};

const Chat = () => {
  const [chatHidden, setChatHidden] = useState(true);
  const [messages, setMessages] = useState(INIT_VALUE);

  useEffect(() => () => setMessages(INIT_VALUE), [chatHidden]);

  const handlerNewMessage = (newMessage) => {
    setMessages([...messages, { id: 'user', message: newMessage }]);
  };

  const renderChat = () => {
    if (chatHidden) {
      return <InitChat onShow={() => setChatHidden(false)} />;
    }

    return (
      <div className={style.chat_container}>
        <div className={style.chat__header}>
          <h2>Live chat</h2>
          <span
            className={style.close_icon}
            onClick={() => setChatHidden(true)}
          >
            &#10006;
          </span>
        </div>
        <MessageList messageList={messages} />
        <Form onNewMessage={handlerNewMessage} />
      </div>
    );
  };

  return ReactDOM.createPortal(
    <div className={style.chat}>{renderChat()}</div>,
    document.getElementById('chat')
  );
};

export default Chat;
