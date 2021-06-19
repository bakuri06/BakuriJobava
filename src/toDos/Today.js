import React, { useState, useEffect } from 'react'
import './style.scss'
import Clock from './Date';
import Modal from './Modal';
const Today = ({ city, searchValue }) => {
    const [data, setData] = useState([]);
    const [dataOfHours, setDataOfHours] = useState([]);

    const key = 'fb8b35a37304d98e955760be96b16348';
    const keyOfHours = 'b6820c61804b4edda5244706211406';

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`);
            if (response.status === 200) {
                const responseData = await response.json();
                setData([responseData]);
            } else {
                setData([])
            }
        }
        fetchData();

    }, [searchValue]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${keyOfHours}&q=${city}&days=7&aqi=no&alerts=yes`);
            if (response.status === 200) {
                const responseData = await response.json();
                setDataOfHours([responseData]);
            } else {
                setDataOfHours([])
            }
        }
        fetchData();

    }, [searchValue]);

    return (
        <div className="inputVal">
            <Clock />
            <div>
                {data && data.map(dataa => <div key={dataa.id}>
                    <h2>{dataa.name},
                        {dataa.sys.country}</h2>
                    <div className='for_flex'>
                        <img src={`http://openweathermap.org/img/wn/${dataa.weather[0].icon}@2x.png`} alt="weather"></img>
                        <h1>{dataa.main.temp} <span>&#8451;</span> </h1>
                    </div>
                    <p>Feels like {dataa.main.feels_like}.Few {dataa.weather[0].description} .{dataa.weather[0].main} </p>
                    <div className='for_flex border'>
                        <ul>
                            <li>{dataa.wind.speed}m/s NNW</li>
                            <li>Humidity:{dataa.main.humidity}%</li>
                            <li>Dew point: {dataa.main.temp_min}&#8451;</li>
                        </ul>
                        <ul>
                            <li>{dataa.main.pressure}hPa</li>
                            <li>Uv:8</li>
                            <li>Visibility: {Number(dataa.visibility) / 1000}km</li>
                        </ul>
                    </div>
                </div>)
                }
                <Modal>
                    <div>
                        {dataOfHours && dataOfHours.map(dataa => <div key={'uniq'}>
                            <h2 className='forBorder'>{dataa.forecast.forecastday[0].date}</h2>
                            <ul className='for_flex'>
                                <li>{dataa.forecast.forecastday[0].hour[8].time}</li>
                                <li className='for_flex'>
                                    <img src={dataa.forecast.forecastday[0].hour[8].condition.icon} alt="weather"></img>
                                    {dataa.forecast.forecastday[0].hour[8].temp_c}/{dataa.forecast.forecastday[0].hour[8].dewpoint_c}
                                </li>
                                <li><p className='for_padding'>{dataa.forecast.forecastday[0].day.condition.text}</p></li>
                            </ul>
                            <ul className='for_flex'>
                                <li>{dataa.forecast.forecastday[0].hour[12].time}</li>
                                <li className='for_flex'>
                                    <img src={dataa.forecast.forecastday[0].hour[12].condition.icon} alt="weather"></img>
                                    {dataa.forecast.forecastday[0].hour[12].temp_c}/{dataa.forecast.forecastday[0].hour[12].dewpoint_c}
                                </li>
                                <li><p className='for_padding'>{dataa.forecast.forecastday[0].day.condition.text}</p></li>
                            </ul>
                            <ul className='for_flex'>
                                <li>{dataa.forecast.forecastday[0].hour[17].time}</li>
                                <li className='for_flex'>
                                    <img src={dataa.forecast.forecastday[0].hour[12].condition.icon} alt="weather"></img>
                                    {dataa.forecast.forecastday[0].hour[17].temp_c}/{dataa.forecast.forecastday[0].hour[17].dewpoint_c}
                                </li>
                                <li><p className='for_padding'>{dataa.forecast.forecastday[0].day.condition.text}</p></li>
                            </ul>
                            <ul className='for_flex'>
                                <li>{dataa.forecast.forecastday[0].hour[21].time}</li>
                                <li className='for_flex'>
                                    <img src={dataa.forecast.forecastday[0].hour[21].condition.icon} alt="weather"></img>
                                    {dataa.forecast.forecastday[0].hour[21].temp_c}/{dataa.forecast.forecastday[0].hour[21].dewpoint_c}
                                </li>
                                <li><p className='for_padding'>{dataa.forecast.forecastday[0].day.condition.text}</p></li>
                            </ul>

                        </div>)
                        }
                    </div>
                </Modal>
            </div>
        </div>
    )



}


export default Today;

