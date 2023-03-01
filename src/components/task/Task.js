import "./task.css"

function Task({title,duration}) {
    //const {title,duration} = props
    return (
        <div className="task"
             style={{
                 backgroundColor: "#00a6ff99"
             }}>


            <div className="title">
                {title}
            </div>
            <br/>
            <div>
                {duration}
            </div>
            <br/>
{/*
            if details don't exist in one object it wont display error instead nothing this error is displayed when the props has an embedded property only like details and level
*/}
            {/*{props.details && <div className="title">Level {props.details.level}</div>}*/}

            <div className="actions">
                <span>delete</span>

                <span>update</span>
            </div>
        </div>
    )
}

export default Task;