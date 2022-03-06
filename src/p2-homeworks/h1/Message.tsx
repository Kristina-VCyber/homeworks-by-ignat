import React from 'react'
import classes from "./Message.module.css";

type Props = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

export function Message(props: Props) {
    return (
        <div className={classes.message}>
            <div className={classes.imgWrapper}>
                <img className={classes.avatar} src={props.avatar} alt=""/>
            </div>
            <div className={classes.textWrapper}>
                <div className={classes.text}>

                        <h3>{props.name}</h3>
                        <div>
                            {props.message}
                        </div>

                    <div className={classes.timeWrapper}>
                        <time className={classes.time}>{props.time}</time>
                    </div>
                </div>
            </div>
        </div>
    )
}


