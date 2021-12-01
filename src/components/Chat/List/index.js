import React, { useRef, useEffect } from 'react';

import style from './List.module.css';

const MessageItem = ({ message }) => {
  return (
    <p
      className={`${style.message} ${
        message.id === 'user' ? style.user : style.other
      }`}
    >
      {message.message}
    </p>
  );
};

const MessageList = ({ messageList }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    elementRef.current.scrollIntoView();
  }, [messageList]);

  const renderList = () => {
    if (!messageList) {
      return <h3>No items</h3>;
    }

    return messageList.map((message, idx) => (
      <MessageItem key={idx} message={message} />
    ));
  };

  return (
    <div className={style.massage_list}>
      {renderList()}
      <div ref={elementRef}></div>
    </div>
  );
};

export default MessageList;
