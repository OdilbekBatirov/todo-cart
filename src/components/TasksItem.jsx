import React from 'react'

const TasksItem = ({task, onDelete}) => {
    return (
        <li key={(index)}>
            {task}
            <button onClick={() => onDelete(index)}>delete</button>
        </li>
    )
}

export default TasksItem