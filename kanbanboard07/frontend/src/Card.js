import React, { useEffect, useState } from 'react';
import styles from './assets/css/Card.css';
import TaskList from './TaskList';
import PropTypes from 'prop-types';

export default function Card({ card }) {
    const [showDetails, setShowDetails] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => { findAll() }, []);

    const findAll = async () => {
        try {
            const response = await fetch(`/api/task?cardNo=${ card.no }`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
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
    };

    const clickTitle = function(e) {
        e.target.className = (e.target.className === styles.Card__Title ? styles.Card__Title__open : styles.Card__Title);
        setShowDetails(!showDetails);
    };

    const notifyAddTask = async function(task) {
        try {
            const response = await fetch('/api/task', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if (!response.ok) {
                throw new Error(`${ response.status } ${ response.statusText }`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            findAll();
        } catch (err) {
            console.error(err);
        }
    };

    const notifyUpdateTask = async function(task) {
        try {
            const response = await fetch('/api/task', {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if (!response.ok) {
                throw new Error(`${ response.status } ${ response.statusText }`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            const newTasks = tasks.map(e => {
                if (e.no === task.no) {
                    return task;
                } 

                return e;
            });

            setTasks(newTasks);
        } catch (err) {
            console.error(err);
        }
    };

    const notifyDeleteTask = async function(task) {
        try {
            const response = await fetch('/api/task', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if (!response.ok) {
                throw new Error(`${ response.status } ${ response.statusText }`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setTasks(tasks.filter(e => {return e.no !== task.no}));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className={ styles.Card }>
            <div className={ styles.Card__Title } onClick={ clickTitle } onChange={ findAll }>
                { card.title }
            </div>
            {
                showDetails ?
                    <div className={ styles.Card__Details }>
                        { card.description }
                        <TaskList taskList={ tasks } cardNo={ card.no } addCallback={ notifyAddTask } updateCallback={ notifyUpdateTask } deleteCallback={ notifyDeleteTask } /> 
                    </div>
                : null
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