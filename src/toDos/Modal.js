import React, { useState, useEffect } from "react";
import "./modal.css";
import Button from '@material-ui/core/Button';


export default function Modal(city, searchValue) {
    const [modal, setmodal] = useState(false);
    const [data, setData] = useState([]);
    const [error,setError]= useState(false);

    const toggleModal = () => {
        setmodal(!modal)
    }

    const key = 'b6820c61804b4edda5244706211406';

    console.log(city);
    console.log(error);

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=Tbilisi&days=7&aqi=no&alerts=yes`)
            .then(response => response.json())
            .then(dataa => {
                setData([dataa]);
            })
            .catch(err => {
                console.log(err)
                setError('404 not found');
                setData([]);
            })
    }, [searchValue])

    return (
        <div>
            <div className="main-btn-modal">
                    <Button onClick={() => toggleModal()} variant="contained" color="secondary">Hourly Forecast</Button>
                    {modal && (
                        <div className="modal">
                            <div className="overlay"></div>
                            <div className="modal-content">
                            {!error && data && data.map(dataa => <div key={'uniq'}>
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
                                <button className='close-modal' onClick={() => { setmodal(!modal) }}>
                                    <i className="fa fa-window-close"></i>
                                </button>

                            </div>
                        </div>
                    )}

                </div>
        </div>
    )
}
