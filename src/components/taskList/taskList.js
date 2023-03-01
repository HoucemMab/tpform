import Task from "../task/Task";


function TaskList(props) {

    return (
        <>
            {
                props.tasks.map(function (elem) {
                    return (
                        <Task
                            key={elem._id}
                            _id={elem._id} title={elem.title} duration={elem.duration}/>

                    )
                })
            }
        </>
    )
}

export default TaskList;