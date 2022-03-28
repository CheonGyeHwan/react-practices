import React, { useState } from 'react';
import styles from './assets/css/TaskList__Task.css';
import PropTypes from 'prop-types';

export default function TaskList__Task({ task }) {
    const [taskCheck, setTaskCheck] = useState(task.done);

    const onChangetaskCheck = (e) =>{
        task.done = (taskCheck === "Y" ? "N" : "Y");
        setTaskCheck(task.done);
    }

    return (
        <>
            <li className={ styles.TaskList__Task }>
                <input type={ 'checkbox' } value= { taskCheck } checked={ taskCheck === "Y" } onChange={ onChangetaskCheck } />
                { task.name }
                <a href={ '#' } className={ styles.TaskList__Task__remove }></a>
            </li>
        </>
  );
};

TaskList__Task.propTypes = {
    task: PropTypes.object.isRequired
};

TaskList__Task.defaultProps = {
    task: {}
}