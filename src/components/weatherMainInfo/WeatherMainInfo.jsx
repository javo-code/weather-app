import React from 'react'

export default function WeatherMainInfo({ weather }) {
    return (
        <div>
            <div>{weather?.location.name}</div>
            <div>{weather?.location.country}</div>
            <div>
                <div>
                    <img
                        src={`https:${weather?.current.condition.icon}`}
                        width='80'
                        alt={weather?.current.condition.text}
                    />
                    <div>{weather?.current.condition.text}</div>
                    <div>{weather?.current.temp_c}ºC</div>
                </div>
            </div>
            <iframe 
                title="mapa"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108977.23899480619!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses-419!2sar!4v1690597380903!5m2!1ses-419!2sar`}
                width="600"
                height="450"
                style={{ border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}
