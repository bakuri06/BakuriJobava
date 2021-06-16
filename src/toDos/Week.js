import React, { useState, useEffect } from 'react'

const Week = ({ city, clicked }) => {
    let [data, setData] = useState([]);

    const key = 'b6820c61804b4edda5244706211406';

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7&aqi=no&alerts=yes`)
            .then(response => response.json())
            .then(dataa => {
                setData([dataa]);
            })
            .catch(err => {
                console.log(err)
            })
    }, [clicked])


    const Render = () => {
        if (city !== 'undefined') {
            return (
                <div>
                    {data.map(dataa => <div key={1239}>
                        <h2>6-day forecast</h2>
                        <ul className='for_flex'>
                            <li>{dataa.forecast.forecastday[0].date}</li>
                            <li className='for_flex'>
                                <img src={dataa.forecast.forecastday[0].day.condition.icon} alt="weather"></img>
                                {dataa.forecast.forecastday[0].day.maxtemp_c}/{dataa.forecast.forecastday[0].day.avgtemp_c}
                            </li>
                            <li><p className='for_padding'>{dataa.forecast.forecastday[0].day.condition.text}</p></li>
                        </ul>

                        <ul className='for_flex'>
                            <li>{dataa.forecast.forecastday[1].date}</li>
                            <li className='for_flex'>
                                <img src={dataa.forecast.forecastday[1].day.condition.icon} alt="weather"></img>
                                {dataa.forecast.forecastday[1].day.maxtemp_c}/{dataa.forecast.forecastday[1].day.avgtemp_c}
                            </li>
                            <li> <p className='for_padding'>{dataa.forecast.forecastday[1].day.condition.text}</p></li>
                        </ul>
                        <ul className='for_flex'>
                            <li>{dataa.forecast.forecastday[2].date}</li>
                            <li className='for_flex'>
                                <img src={dataa.forecast.forecastday[2].day.condition.icon} alt="weather"></img>
                                {dataa.forecast.forecastday[2].day.maxtemp_c}/{dataa.forecast.forecastday[2].day.avgtemp_c}
                            </li>
                            <li><p className='for_padding'>{dataa.forecast.forecastday[2].day.condition.text}</p></li>
                        </ul>
                        <ul className='for_flex'>
                            <li>{dataa.forecast.forecastday[0].date}</li>
                            <li className='for_flex'>
                                <img src={dataa.forecast.forecastday[0].day.condition.icon} alt="weather"></img>
                                {dataa.forecast.forecastday[0].day.maxtemp_c}/{dataa.forecast.forecastday[0].day.avgtemp_c}
                            </li>
                            <li><p className='for_padding'>{dataa.forecast.forecastday[0].day.condition.text}</p></li>
                        </ul>
                        <ul className='for_flex'>
                            <li>{dataa.forecast.forecastday[0].date}</li>
                            <li className='for_flex'>
                                <img src={dataa.forecast.forecastday[0].day.condition.icon} alt="weather"></img>
                                {dataa.forecast.forecastday[0].day.maxtemp_c}/{dataa.forecast.forecastday[0].day.avgtemp_c}
                            </li>
                            <li><p className='for_padding'>{dataa.forecast.forecastday[0].day.condition.text}</p></li>
                        </ul>
                        <ul className='for_flex'>
                            <li>{dataa.forecast.forecastday[0].date}</li>
                            <li className='for_flex'>
                                <img src={dataa.forecast.forecastday[0].day.condition.icon} alt="weather"></img>
                                {dataa.forecast.forecastday[0].day.maxtemp_c}/{dataa.forecast.forecastday[0].day.avgtemp_c}
                            </li>
                            <li><p className='for_padding'>{dataa.forecast.forecastday[0].day.condition.text}</p></li>
                        </ul>

                    </div>)
                    }
                </div>
            )
        }else{
            return ''
        }
    }




return (
    <div>
        {Render ()}
    </div>
)



}


export default Week;

