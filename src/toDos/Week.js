import React, { useState, useEffect } from 'react'

const Week = ({ city, searchValue }) => {
    let [data, setData] = useState([]);
    const key = 'b6820c61804b4edda5244706211406';

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7&aqi=no&alerts=yes`);
            if (response.status === 200) {
                const responseData = await response.json();
                setData([responseData]);
            } else {
                setData([])
            }
        }
        fetchData();

    }, [searchValue]);

    console.log(data);

    /*  const addd = () => {
          let cvld;
          for(let i=0;i<3;i++){
              cvld+=(
  
                  {data.map(dataa => <div key={1239}>
                  <h2>6-day forecast</h2>
                  <ul className='for_flex'>
                      <li>{dataa.forecast.forecastday[i].date}</li>
                      <li className='for_flex'>
                          <img src={dataa.forecast.forecastday[i].day.condition.icon} alt="weather"></img>
                          {dataa.forecast.forecastday[i].day.maxtemp_c}/{dataa.forecast.forecastday[i].day.avgtemp_c}
                      </li>
                      <li><p className='for_padding'>{dataa.forecast.forecastday[i].day.condition.text}</p></li>
                  </ul>
                  </div>
  
                  }
              )
          }
          
  
          return cvld;
      }
  
      */


    //aq data ar icvlebaa


    return (
        <div>
            {data && data.map((dataa, index) => <div key={1239}>
                <h2>6-day forecast</h2>
                <ul className='for_flex'>
                    <li>{dataa.forecast.forecastday[index].date}</li>
                    <li className='for_flex'>
                        <img src={dataa.forecast.forecastday[index].day.condition.icon} alt="weather"></img>
                        {dataa.forecast.forecastday[index].day.maxtemp_c}/{dataa.forecast.forecastday[index].day.avgtemp_c}
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

}


export default Week;

