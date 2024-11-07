'use client'
import { useEffect, useState } from 'react';

const EventTimeline = () => {
    // Sample events array from the JSON
    const events = [
        {
            time: "Thu Nov 07 2024 18:14:27 GMT+0700 (Indochina Time)",
            event: "Registration & Check-in"
        },
        {
            time: "Thu Nov 07 2024 16:37:27 GMT+0700 (Indochina Time)",
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


        // Convert event times to Date objects

        events.forEach((event) => {
            if (event.time) {
                //@ts-expect-error event is giving issue
                event.time = new Date(event.time);
            }
        });
        const checkEventTimes = () => {
            const currentTime = new Date();
            console.log(new Date().toString())

            events.forEach(event => {
                // Check if the current time is within 1 minute of the scheduled event time
                //@ts-expect-error error is just casuing because of year is not compatable
                if (event.time && currentTime >= event.time && currentTime < new Date(event.time.getTime() + 60000)) {
                    //@ts-expect-error same issue
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
                <div className='mt-12 mb-4 text-3xl font-bold flex justify-center items-center  '>
                    <div className=' px-32 rounded-md py-4'>
                        <p><span className='text-[#A4FA3D]'>Now: </span>{`${currentEvent}`}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventTimeline;
