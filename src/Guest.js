import React, { useContext, useEffect } from 'react'
import { SocketContext } from './context/SocketContext';

export const Guest = () => {

    const { socket } = useContext(SocketContext);

    const handlerClick = () => {
        socket.emit(
            'hey-backend',
            {
                'callbackToExecute': true,
                'data': 'Hi, Im a data'
            },
            (payload) => { console.log(payload.backendResponse) });
    }

    useEffect(() => {
        socket.on('hey-frontend', (payload) => {
            console.log(payload);
        });
        return () => {
            socket.off('hey-frontend');
        }
    }, [socket])

    return (
        <div>
            Guest Window
            <button onClick={handlerClick}>
                Click me for shot an event
            </button>
        </div>
    )
}
