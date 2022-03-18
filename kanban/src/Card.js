import React, { useState } from 'react';
import styles from './assets/css/Card.css';
import TaskList from './TaskList';

const Card = ({ card }) => {
    const [showDetails, setShowDetails] = useState(false);

    const clickTitle = function(e) {
        e.target.className = (e.target.className === styles.Card__Title ? styles.Card__Title__open : styles.Card__Title);
        setShowDetails(!showDetails);
    }

    return (
        <>
            <div className={ styles.Card }>
            <div className={ styles.Card__Title } onClick={ clickTitle }>{ card.title }</div>
            <div className={ styles.Card__Details }>
                { card.description }
            </div>
            {
                showDetails ? <TaskList taskList={ card.tasks } /> : null
            }
            </div>
        </>
    );
}

export default Card;