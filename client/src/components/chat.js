import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import socketClient from 'socket.io-client';

const useStyles = makeStyles({
    chatForm: {
        width: '300px'
    },
    mainWindow: {
        height: '300px',
        overflow: 'auto',
        border: '4px solid #00f',
        borderRadius: '3px',
        padding: '3px'
    },
    chatText: {
      borderRadius: '3px'
    },
    inputForm: {
        display: 'flex',
        flexDirection: 'column',
        border: '3px solid #eee',
        padding: '6px',
        borderRadius: '5px',
        marginTop: '6px'
    },
    input: {
        background: '#fff',
        padding: '3px',
        margin: '3px',
        borderRadius: '5px'
    },
    button: {
        background: '#00f',
        color: '#eee',
        borderRadius: '5px'
    }
});

const Chat = ({title}) => {
    const classes = useStyles();

    const [socket] = useState(socketClient.connect('https://desolate-eyrie-58645.herokuapp.com/'));
    const [chatText, setChatText] = useState([]);
    const [handle, setHandle] = useState('');
    const [message, setMessage] = useState('');
    const [typing, setTyping] = useState({});

    useEffect(() => {
        socket.on('chat', data => {
            const chat = [...chatText];
            chat.push(data);
            setChatText(chat);
        });
        socket.on('typing', data => {
            const _typing = Object.assign({}, typing);
            _typing[data.handle] = data.handle;
            setTyping(_typing);
        });
        socket.on('typing-stopped', data => {
            const _typing = Object.assign({}, typing);
            delete _typing[data.handle];
            setTyping(_typing);
        });

        // cleanup
        return () => {
            socket.removeListener('chat');
            socket.removeListener('typing');
            socket.removeListener('typing-stopped');
        }
    }, [chatText, typing]);

    const onSubmit = event => {
        event.preventDefault();
        socket.emit('chat', {handle, message});
        setMessage('');
        socket.emit('typing-stopped', {handle});
    };

    const onHandleChange = event => setHandle(event.target.value);
    const onMessageChange = event => {
        setMessage(event.target.value);
        if (event.target.value) {
            socket.emit('typing', {handle});
        } else {
            socket.emit('typing-stopped', {handle});
        }
    };

    return (
        <div>
            <h2>Window: {title}</h2>
            <form className={classes.chatForm} onSubmit={onSubmit}>
                <div className={classes.mainWindow}>
                    <div className={classes.chatText}>
                        {chatText.map((entry, index) => (
                            <div key={index} className={classes.chatEntry}>
                                <strong>{entry.handle}</strong>: {entry.message}
                            </div>
                        ))}
                    </div>
                    <div className={classes.typing}>
                        {Object.values(typing).map(handle => (
                            <div key={handle}><em>{handle} is typing</em></div>
                        ))}
                    </div>
                </div>
                <div className={classes.inputForm}>
                    <input className={classes.input} value={handle} placeholder="Handle" onChange={onHandleChange}/>
                    <input className={classes.input} value={message} placeholder="Message" onChange={onMessageChange}/>
                    <button className={classes.button}>Send</button>
                </div>
            </form>
        </div>
    )
};

Chat.propTypes = {
    title: PropTypes.string.isRequired
};

export default Chat;