import React, { useState, useEffect } from 'react'
import './style.scss'
import Clock from './Date';
import Modal from './Components/Modal'
import Loader from './Components/Loader';
const Today = ({ city, searchValue }) => {
    const [data, setData] = useState([]);
    const [dataOfHours, setDataOfHours] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingHr, setLoadingHr] = useState(false);

    const key = 'fb8b35a37304d98e955760be96b16348';
    const keyOfHours = 'b6820c61804b4edda5244706211406';

    useEffect(() => {
        getData();
    }, [searchValue])

    const getData = () => {
        setLoading(true);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
            .then(response => response.json())
            .then(dataa => {
                setData({
                    id: dataa.id,
                    name: dataa.name,
                    sys_country: dataa.sys.country,
                    icon: dataa.weather[0].icon,
                    main_temp: dataa.main.temp,
                    feels_like: dataa.main.feels_like,
                    description: dataa.weather[0].description,
                    weather_main: dataa.weather[0].main,
                    wind_speed: dataa.wind.speed,
                    main_humidity: dataa.main.humidity,
                    dew_point: dataa.main.temp_min,
                    pressure: dataa.main.pressure,
                    visibility: dataa.visibility
                })
            })
            .catch(err => {
                console.log(err);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        getDataHours();
    }, [searchValue])

    const getDataHours = () => {
        setLoadingHr(true);
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${keyOfHours}&q=${city}&days=7&aqi=no&alerts=yes`)
            .then(response => response.json())
            .then(data => {
                setDataOfHours([data]);
            })
            .catch(err => {
                console.log(err);
                setDataOfHours(null);
            })
            .finally(() => {
                setLoadingHr(false);
            })
    }

    return (
        <div className="inputVal">
            <Clock />
            <div>
                <Loader isLoading={loading}>
                    {data && <div key={data.id}>
                        <h2>{data.name},
                            {data.sys_country}</h2>
                        <div className='for_flex'>
                            <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="weather"></img>
                            <h1>{data.main_temp} <span>&#8451;</span> </h1>
                        </div>
                        <p>Feels like {data.feels_like}.Few {data.description} .{data.weather_main} </p>
                        <div className='for_flex border'>
                            <ul>
                                <li>{data.wind_speed}m/s NNW</li>
                                <li>Humidity:{data.main_humidity}%</li>
                                <li>Dew point: {data.dew_point}&#8451;</li>
                            </ul>
                            <ul>
                                <li>{data.pressure}hPa</li>
                                <li>Uv:8</li>
                                <li>Visibility: {Number(data.visibility) / 1000}km</li>
                            </ul>
                        </div>
                    </div>
                    }
                </Loader>
                <Modal>
                    <div>
                        <Loader isLoading={loadingHr}>
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
                        </Loader>
                    </div>
                </Modal>
            </div>
        </div>
    )



}


export default Today;

