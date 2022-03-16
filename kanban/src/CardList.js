import React from 'react';
import styles from './assets/css/CardList.css';
import Card from './Card';

const CardList = ({ title, cards }) => {
  return (
    <div className={ styles.CardList }>
        <h1>{ title }</h1>
        { cards.map(item => ( <Card key={ item.no } card={ item } /> )) }
    </div>
  );
}

export default CardList;