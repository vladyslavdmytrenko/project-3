import React, { useState } from 'react';

import style from './Form.module.css';

const MessageForm = ({ onNewMessage }) => {
  const [message, setMessage] = useState('');

  const handlerMessage = (e) => setMessage(e.target.value);

  const handlerSubmit = (e) => {
    e.preventDefault();
    onNewMessage(message);
    setMessage('');
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input
        value={message}
        onChange={handlerMessage}
        type="text"
        className={style.form__input}
      />
      <button type="submit" className={style.form__btn} disabled={!message}>
        &#10148;
      </button>
    </form>
  );
};

export default MessageForm;
