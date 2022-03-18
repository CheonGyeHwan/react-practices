import React, { useState ,useCallback} from 'react';
import styles from './assets/css/TaskList__Task.css';

const TaskList__Task = ({ task }) => {
    const [taskCheck, setTaskCheck] = useState(task.done);

    const onChangetaskCheck = (e) =>{
        task.done = !taskCheck;
        setTaskCheck(!taskCheck);
    }

    return (
        <>
            <li className={ styles.TaskList__Task }>
                <input type={ 'checkbox' } value= { taskCheck } checked={ taskCheck } onChange={ onChangetaskCheck } />
                { task.name }
                <a href={ '#' } className={ styles.TaskList__Task__remove }></a>
            </li>
        </>
  );
}

export default TaskList__Task;