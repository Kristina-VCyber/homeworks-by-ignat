import React from 'react'
import {Message} from "./Message";
const messageData = {
    avatar: 'https://assets2.rockpapershotgun.com/the-witcher-3-best-rpgs.jpg/BROK/thumbnail/1200x1200/quality/100/the-witcher-3-best-rpgs.jpg',
    name: 'Geralt',
    message: "Let's go and play Gvint!",
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
