import React, { useState, useEffect } from 'react'
import Loader from './Components/Loader'
import Audio from './Components/Audio';

const Content = ({ music, searchValue }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData();
    }, [searchValue])

    const getData = () => {
        setLoading(true);
        fetch(`https://itunes.apple.com/search?term=${music}`)
            .then(response => response.json())
            .then(dataa => {
                setData({
                    //artistName:dataa.results.map(artist => artist.artistName),
                    //url:dataa.results.map(url => url.previewUrl)
                    artistName:dataa.results[0].artistName,
                    previewUrl:dataa.results[0].previewUrl,
                    secArtistName:dataa.results[1].artistName,
                    secPreviewUrl:dataa.results[1].previewUrl,
                    thirdArtistName:dataa.results[2].artistName,
                    thirdPreviewUrl:dataa.results[2].previewUrl
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

    return (
        <Loader isLoading={loading}>
            <div>
                {(data === undefined) ?
                    ''
                    : 
                    <div>
                        <p>{data.artistName}</p>
                        <Audio link={data.url} />
                        <p>{data.secArtistName}</p>
                        <Audio link={data.secPreviewUrl} />
                        <p>{data.thirdArtistName}</p>
                        <Audio link={data.thirdPreviewUrl}/>
                    </div>
                }
            </div>
        </Loader>
    )
}

export default Content;
