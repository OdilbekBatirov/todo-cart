import React from 'react'
import TasksItem from './TasksItem'

const TasksList = ({tasks, onDeleteTasks}) => {
    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                  <TasksItem key={index} task={task} onDelete={() => onDeleteTasks(index)} />
                ))
                }
            </ul>
        </div>
    )
}

export default TasksList