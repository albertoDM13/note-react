import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConf.js';
import './style.css';

async function addComent() {
  console.log('hi');
  try {
    const docRef = await addDoc(collection(db, 'notas'), {
      text: 'Ada',
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export default function NavBar() {
  return (
    <div>
      <input
        type={'text'}
        placeholder={'Añadir Comentario'}
        className={'BlockText'}
      />
      <input
        onClick={addComent}
        type={'button'}
        value={'Añadir'}
        className={'buttonAdd'}
      />
    </div>
  );
}
