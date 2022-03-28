import React, { useEffect, useState } from 'react';
import styles from './assets/css/Card.css';
import TaskList from './TaskList';
import PropTypes from 'prop-types';

export default function Card({ card }) {
    const [showDetails, setShowDetails] = useState(false);
    const [tasks, setTasks] = useState([]);

    const clickTitle = function(e) {
        e.target.className = (e.target.className === styles.Card__Title ? styles.Card__Title__open : styles.Card__Title);
        setShowDetails(!showDetails);
    };

    useEffect(async () => {
        try {
            const response = await fetch('/api/task', {
                method: 'get',
                header: {
                    'Content-Type': 'application.json',
                    'Accept': 'application/json'
                },
                body: null
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setTasks(json.data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <>
            <div className={ styles.Card }>
            <div className={ styles.Card__Title } onClick={ clickTitle }>{ card.title }</div>
            <div className={ styles.Card__Details }>
                { card.description }
            </div>
            {
                showDetails ? <TaskList taskList={ tasks.filter(e => e.cardNo === card.no) } /> : null
            }
            </div>
        </>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
}

Card.defaultProps = {
    card: {}
}