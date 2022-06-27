import React from 'react';
import s from './Owner.module.css';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';

function Owner({ owner }) {
  
  return (
    <div className={s.owner}>
      <Avatar avatar={owner.avatar} />
      <Info owner={owner} />
    </div>
  );
}

export default Owner;
