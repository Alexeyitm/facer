import React from 'react';
import s from './InputMessage.module.css';
import ButtonSendMessage from './ButtonSendMessage/ButtonSendMessage'

function InputMessage({ inputMessageValue, addMessage }) {

  const inputMessage = React.createRef();
  
  return (
    <div className={s.input}>
      <textarea className={s.textarea} ref={inputMessage} value={inputMessageValue}></textarea>
      <ButtonSendMessage addMessage={addMessage} inputMessage={inputMessage}/>
    </div>
  );
}

export default InputMessage;
