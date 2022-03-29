import React, { useState } from 'react';
import styles from './assets/css/TaskList__Task.css';
import PropTypes from 'prop-types';

export default function TaskList__Task({ task, updateCallback, deleteCallback }) {
    return (
        <>
            <li className={ styles.TaskList__Task }>
                <input type={ 'checkbox' } 
                       value= { task.done } 
                       checked={ task.done === "Y" } 
                       onChange={ e => { 
                           try {
                               task.done = task.done === "Y" ? "N" : "Y";
                               updateCallback(task);
                           } catch (err) {
                               console.error(err);
                           }
                        } } 
                />
                { task.name }
                <a href={ '#' } 
                   className={ styles.TaskList__Task__remove }
                   onClick={e => {
                       try {
                           deleteCallback(task);
                       } catch (err) {
                           console.error(err);
                       }
                   }}
                ></a>
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