import React from 'react'
import {TaskType} from "../../p1-main/m1-ui/u1-app/App"

type messageData = {
  tasks: TaskType
}

const HW1 = (props: messageData) => {
    return (
        <div>
            <hr/>
            {/*homeworks 1*/}
            {/*should work (должно работать)*/}


            avatar={props.tasks.avatar}
            name={props.tasks.name}
            message={props.tasks.message}
            time={props.tasks.time}
            {/*/>*/}

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
};
export default HW1;
