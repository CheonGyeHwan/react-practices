import React from 'react';
import TaskList__Task from './TaskList__Task';

const TaskList = ({ taskList }) => {
  return (
    <div className={ 'TaskList' }> 
        <ul>
            { taskList.map(item => ( <TaskList__Task key={ item.no } task={ item }/> )) }
        </ul>
    </div>
  )
}

export default TaskList;