import React from 'react';
import './style.css';

export default function NavBar() {
  return (
    <div>
      <input
        type={'text'}
        placeholder={'Añadir Comentario'}
        className={'BlockText'}
      />
      <input type={'button'} value={'Añadir'} className={'buttonAdd'} />
    </div>
  );
}
