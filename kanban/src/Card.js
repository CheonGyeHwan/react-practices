import React from 'react';
import styles from './assets/css/Card.css';
import TaskList from './TaskList';

const Card = ({ card }) => {
    return (
        <>
            <div className={ styles.Card }>
            <div className={ styles.Card__Title }>{ card.title }</div>
                <div className={ styles.Card__Details }>
                    { card.description }
                </div>
            <TaskList taskList={ card.tasks } />
            </div>
        </>
    );
}

export default Card;