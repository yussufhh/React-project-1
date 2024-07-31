import React, { useState, useEffect } from "react";

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const timeStyle = {
        fontSize: '1.5em',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '20px'
    };

    return (
        <div>
            <p style={timeStyle}>{currentTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default Time;
