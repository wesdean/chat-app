import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Chat from "../components/chat";
import _ from 'lodash';

const useStyles = makeStyles({
    chatWindows: {
        display: 'flex'
    },
    chatContainer: {
        margin: '6px'
    }
});

const ChatPage = () => {
    const classes = useStyles();

    const [chatNumber, setChatNumber] = useState(1);

    const onSubmit = event => {
        event.preventDefault();
    };

    const onChatNumberChange = event => {
        const number = Number(event.target.value);
        if (number) setChatNumber(number);
    };

    return (
        <div>
            <h1>Chat Demo</h1>
            <p>
                This demonstrates a chat app using web sockets. You can select up to 4 chat windows to open in the same window, or open multiple windows.<br/>
                Each chat window connects to the server and transmits data via web sockets.<br/>
                See the source on Github at <a href="https://github.com/wesdean/chat-app">https://github.com/wesdean/chat-app</a>.
            </p>
            <form onSubmit={onSubmit}>
                <label>Number of chat windows:
                    <select onChange={onChatNumberChange} value={chatNumber}>
                        {[1, 2, 3, 4].map(number => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select>
                </label>
            </form>
            <div className={classes.chatWindows}>
                {_.times(chatNumber, number => (
                    <div key={number} className={classes.chatContainer}>
                        <Chat title={(number + 1).toString()}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatPage;