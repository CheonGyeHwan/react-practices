import React from 'react';
import styles from './assets/css/TaskList__Task.css';

const TaskList__Task = ({ task }) => {
  return (
      <>
          <li className={ styles.TaskList__Task }>
              <input type={ 'checkbox' } defaultChecked={ task.done } />
              { task.name }
              <a href={ '#' } className={ styles.TaskList__Task__remove }></a>
          </li>
      </>
  );
}

export default TaskList__Task;