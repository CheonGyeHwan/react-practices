import React from 'react';
import styles from './assets/css/TaskList.css';
import TaskList__Task from './TaskList__Task';
import PropTypes from 'prop-types';

export default function TaskList({ taskList, cardNo, addCallback, updateCallback, deleteCallback }) {
  return (
    <div className={ 'TaskList' }> 
        <ul>
            { taskList.map(item => ( <TaskList__Task key={ item.no } task={ item } updateCallback={ updateCallback } deleteCallback={ deleteCallback } /> )) }
            <input
              type='text' 
              className={ styles.TaskList__add_task } 
              placeholder={ 'Task 추가' } 
              onKeyPress={ e => {
                if (e.key === 'Enter') {
                  try {
                    const newTask = {
                      name: e.target.value,
                      done: 'N',
                      cardNo: cardNo
                    };
                    
                    e.target.value="";
                    addCallback(newTask);
                  } catch (err) {
                    console.error(err);
                  }
                }
              } }
            />
        </ul>
    </div>
  )
};

TaskList.propTypes = {
  taskList: PropTypes.array.isRequired
};

TaskList.defaultProps = {
  taskList: []
}