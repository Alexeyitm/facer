import React from 'react';
import s from './Consumer.module.css';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';

function Consumer() {
  return (
    <div className={s.consumer}>
      <Avatar />
      <Info
        name="Alexey Ponomarev" 
        dataOfBirth="19.10.1996" 
        city="Magnitogorsk"
        education="Ural Federal University"
      />
    </div>
  );
}

export default Consumer;
