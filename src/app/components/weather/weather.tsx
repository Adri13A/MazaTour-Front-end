'use client';

import React, { useState, useEffect } from 'react';
import { LoaderCircle } from 'lucide-react';
import Image from "next/image";

type WeatherData = {
    location: {
        name: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string;
        };
    }
};

export default function Weather() {
    const [weatherData, setweatherData] = useState<WeatherData | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=2a75441bbcde40cbb0b191938250904&q=Mazatlan&lang=es`
                );

                const data = await res.json();
                setweatherData(data);
            } catch (error) {
                console.error("Error al obtener el clima de la ciudad", error);
            }
        };
        fetchWeather();
    }, []);

    if (!weatherData) {
        return <div  className={`weather-info`}> <span>Cargando</span><LoaderCircle size={24}/></div>;
    }

    return (

        <div className={`weather-info`}>
            <Image
                src={`https:${weatherData.current.condition.icon}`}
                alt="Clima"
                className=""
                width="34"
                height="34"
            />
            <span>{Math.round(weatherData.current.temp_c)} °C</span>
            <span className='city-name'>{weatherData.location.name}</span>
        </div>
    )

}