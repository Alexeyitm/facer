import React from 'react';
import s from './InputMessage.module.css';
import ButtonSendMessage from './ButtonSendMessage/ButtonSendMessage'

function InputMessage({ newMessageText, addMessage, updateNewMessageText }) {

  const inputMessage = React.createRef();

  const onMessageChange = () => {
    updateNewMessageText(inputMessage.current.value)
  }
  
  return (
    <div className={s.input}>
      <textarea className={s.textarea} ref={inputMessage} value={newMessageText} onChange={onMessageChange}></textarea>
      <ButtonSendMessage addMessage={addMessage} inputMessage={inputMessage}/>
    </div>
  );
}

export default InputMessage;
