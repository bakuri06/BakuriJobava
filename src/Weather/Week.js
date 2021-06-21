import React, { useState, useEffect } from 'react'
import Loader from './Components/Loader';

const Week = ({ city, searchValue }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const key = 'b6820c61804b4edda5244706211406';

    useEffect(() => {
        getData();
    }, [searchValue])


    const getData = () => {
        setLoading(true);
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7&aqi=no&alerts=yes`)
            .then(response => response.json())
            .then(responseData => {
                setData({
                    date: [responseData][0].forecast.forecastday[0].date,
                    secDate: [responseData][0].forecast.forecastday[1].date,
                    thirdDate: [responseData][0].forecast.forecastday[2].date,
                    icon: [responseData][0].forecast.forecastday[0].day.condition.icon,
                    secondIcon: [responseData][0].forecast.forecastday[1].day.condition.icon,
                    thirdIcon: [responseData][0].forecast.forecastday[2].day.condition.icon,
                    maxTemp: [responseData][0].forecast.forecastday[0].day.maxtemp_c,
                    secMaxTemp: [responseData][0].forecast.forecastday[1].day.maxtemp_c,
                    thirdMaxTemp: [responseData][0].forecast.forecastday[2].day.maxtemp_c,
                    averTemp: [responseData][0].forecast.forecastday[0].day.avgtemp_c,
                    secAverTemp: [responseData][0].forecast.forecastday[1].day.avgtemp_c,
                    thirdAverTemp: [responseData][0].forecast.forecastday[2].day.avgtemp_c,
                    text: [responseData][0].forecast.forecastday[0].day.condition.text,
                    secText: [responseData][0].forecast.forecastday[1].day.condition.text,
                    thirdText: [responseData][0].forecast.forecastday[2].day.condition.text,
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

    console.log(data);

    return (
        <div>
            <Loader isLoading={loading}>
                {data && <div key={1239}>
                    <h2>6-day forecast</h2>
                    <ul className='for_flex'>
                        <li>{data.date}</li>
                        <li className='for_flex'>
                            <img src={data.icon} alt="weather"></img>
                            {data.maxTemp}/{data.averTemp}
                        </li>
                        <li><p className='for_padding'>{data.text}</p></li>
                    </ul>

                    <ul className='for_flex'>
                        <li>{data.secDate}</li>
                        <li className='for_flex'>
                            <img src={data.secondIcon} alt="weather"></img>
                            {data.secMaxTemp}/{data.secAverTemp}
                        </li>
                        <li> <p className='for_padding'>{data.secText}</p></li>
                    </ul>
                    <ul className='for_flex'>
                        <li>{data.thirdDate}</li>
                        <li className='for_flex'>
                            <img src={data.thirdIcon} alt="weather"></img>
                            {data.thirdMaxTemp}/{data.thirdMaxTemp}
                        </li>
                        <li><p className='for_padding'>{data.thirdText}</p></li>
                    </ul>
                </div>
                }
            </Loader>

        </div>
    )

}


export default Week;

