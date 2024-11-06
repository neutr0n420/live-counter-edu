'use client'
import React, { useState, useEffect } from "react";
const CountdownTimer = () => {
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("2024-11-10T17:00:00+0000");
    const [countdownStarted, setCountdownStarted] = useState(true);
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        if (countdownStarted && eventDate) {
            const countdownInterval = setInterval(() => {
                const currentTime = new Date().getTime();
                const eventTime = new Date(eventDate).getTime();
                let remainingTime = eventTime - currentTime;

                if (remainingTime <= 0) {
                    remainingTime = 0;
                    clearInterval(countdownInterval);
                    alert("Countdown complete!");
                }

                setTimeRemaining(remainingTime);
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [countdownStarted, eventDate, timeRemaining]);

    useEffect(() => {
        if (countdownStarted) {
            document.title = eventName;
        }
    }, [countdownStarted, eventName]);

    const handleSetCountdown = () => {
        setCountdownStarted(true);
        localStorage.setItem("eventDate", eventDate);
        localStorage.setItem("eventName", eventName);
    };

    // const handleStopCountdown = () => {
    //     setCountdownStarted(false);
    //     setTimeRemaining(0);
    // };

    // const handleResetCountdown = () => {
    //     setCountdownStarted(false);
    //     setEventDate("");
    //     setEventName("");
    //     setTimeRemaining(0);
    //     localStorage.removeItem("eventDate");
    //     localStorage.removeItem("eventName");
    // };

    const formatDate = (date: string) => {
        const options = { month: "long", day: "numeric", year: "numeric" };
        return new Date(date).toLocaleDateString("en-US", options);
    };

    const formatTime = (time: number) => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        return (
            <div className="flex justify-center items-center">
                <div className="mx-4 px-6 py-6 bg-[#1b263b] text-xl font-bold rounded-md">
                    {days.toString().padStart(2, "0")} <span>days</span>
                </div>
                <div className="mx-4 px-6 py-6 bg-[#1b263b] text-xl font-bold rounded-md">
                    {hours.toString().padStart(2, "0")} <span> hours</span>
                </div>
                <div className="mx-4 px-6 py-6 bg-[#1b263b] text-xl font-bold rounded-md">
                    {minutes.toString().padStart(2, "0")} <span>min</span>
                </div>
                <div className="mx-4 px-6 py-6 bg-[#1b263b] text-xl font-bold rounded-md">
                    {seconds.toString().padStart(2, "0")} <span>seconds</span>
                </div>
            </div>
        );
    };

    return (
        <div className="countdown-timer-container">
            <>
                <p className="text-lg font-bold pb-6">Time Left</p>
                {formatTime(timeRemaining)}
            </>
        </div>
    );
};

export default CountdownTimer;