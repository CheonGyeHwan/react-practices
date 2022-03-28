import React from 'react';
import TaskList__Task from './TaskList__Task';
import PropTypes from 'prop-types';

export default function TaskList({ taskList }) {
  return (
    <div className={ 'TaskList' }> 
        <ul>
            { taskList.map(item => ( <TaskList__Task key={ item.no } task={ item }/> )) }
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