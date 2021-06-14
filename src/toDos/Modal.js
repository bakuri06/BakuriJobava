import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal({city,clicked}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let [data, setData] = useState([]);

    const key = 'b6820c61804b4edda5244706211406';

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7&aqi=no&alerts=yes`)
            .then(response => response.json())
            .then(dataa => {
                setData([dataa]);
                console.log(dataa);
            })
            .catch(err => {
                console.log(err)
            })
    }, [clicked])


    return (
        <div className='forPosition'>
            <Button onClick={handleOpen} className='toMargin' variant="contained" color="secondary">Hourly Forecast</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {data.map(dataa => <div key={93781}>
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
                </Fade>
            </Modal>
        </div>
    );
}


