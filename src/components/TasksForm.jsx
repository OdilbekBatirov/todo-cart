import React from 'react'

const TasksForm = ({newTasks, onInputChange}) => {
    return (
        <div>
            <input
                type='text'
                value={newTasks}
                onChange={(e) => setNewTaskc(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

export default TasksForm