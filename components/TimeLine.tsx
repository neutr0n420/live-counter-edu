'use client'
import { useEffect, useState } from 'react';

const EventTimeline = () => {
    // Sample events array from the JSON
    const events = [
        {
            time: "Wed Nov 06 2024 13:01:00 GMT+0530 (India Standard Time)",
            event: "Registration & Check-in"
        },
        {
            time: "Wed Nov 06 2024 13:02:00 GMT+0530 (India Standard Time)",
            event: "Opening Ceremony"
        },
        {
            time: "",
            event: "Networking"
        },
        {
            time: "",
            event: "Hackathon Begin"
        },
        {
            time: "",
            event: "Lunch Break"
        },
        {
            time: "",
            event: "Workshop 1 - [Build your 1st dApp on Edu Chain]"
        },
        {
            time: "",
            event: "Snacks Break"
        },
        {
            time: "",
            event: "Registration & Check-in"
        },
        {
            time: "",
            event: "Registration & Check-in"
        },
        {
            time: "",
            event: "Registration & Check-in"
        }
    ];

    // State for storing the current event
    const [currentEvent, setCurrentEvent] = useState(null);

    useEffect(() => {
        type EventType = {
            time: Date,
            event: string
        }
        // Convert event times to Date objects

        events.forEach((event: any) => {
            if (event.time) {
                event.time = new Date(event.time);
            }
        });
        const checkEventTimes = () => {
            const currentTime = new Date();
            console.log(new Date().toString())

            events.forEach(event => {
                // Check if the current time is within 1 minute of the scheduled event time
                if (event.time && currentTime >= event.time && currentTime < new Date(event.time.getTime() + 60000)) {
                    setCurrentEvent(event.event);
                    console.log(event.event)
                }
            });
        };

        // Run checkEventTimes every minute
        const intervalId = setInterval(checkEventTimes, 1000);

        // Initial check on load
        checkEventTimes();

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [events]);

    return (
        <div>
            {currentEvent && (
                <div className=''>
                    <p>{`Now: ${currentEvent}`}</p>
                </div>
            )}
        </div>
    );
};

export default EventTimeline;
