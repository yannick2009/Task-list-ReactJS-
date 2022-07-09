import React from 'react';
import "./TaskList.scss"

const TaskList = (props) => {
    return (
        <div className='TaskList'>
            {props.children}
        </div>
    );
}

export default TaskList;
