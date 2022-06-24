import React from 'react';
import s from './InputMessage.module.css';
import ButtonSendMessage from './ButtonSendMessage/ButtonSendMessage'

function InputMessage() {

  const inputMessage = React.createRef();

  function sendMessage() {
    alert(inputMessage.current.value)
  }
  
  return (
    <div className={s.input}>
      <textarea className={s.textarea} ref={inputMessage}></textarea>
      <ButtonSendMessage sendMessage={sendMessage}/>
    </div>
  );
}

export default InputMessage;
