import { Task } from "./Task"

export const TasksList = ({tasksList, handleDeleteTask, handleEdit, primaryTheme})=>{
    return (
        <div className="tasksList">
            {tasksList.map((task, i)=>{
                return <Task key={i} task={task} handleDeleteTask={(id)=>handleDeleteTask(i,id)} handleEdit={(evt)=>handleEdit(i,evt)} primaryTheme={primaryTheme} />
            })}
        </div>
    )
}