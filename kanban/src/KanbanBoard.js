import React from 'react';
import CardList from './CardList';
import styles from './assets/css/KanbanBoard.css';
import cards from './data.json';

const KanbanBoard = () => {
    console.log(cards);
    
     return (
      <div className={ styles.KanbanBoard }>
            <CardList title={'Todo'} />
            <CardList title={'Doing'} />
            <CardList title={'Done'} />
       </div>
     )
}

export default KanbanBoard;