import React from 'react'
import MainContent from '../Layout/layouts/MainContent';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import './LinkItem.css'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { BasicTable } from '../Layout/layouts/BasicTable';
import { Container } from '@material-ui/core';
import Counter from '../Layout/layouts/Counter';
import { Button } from '@material-ui/core';
import SelectedSize from '../Layout/layouts/SelectSize';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginRight: '20px',
        marginBottom: '20px'
    },
    media: {
        height: 300,
    },
    forFlex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    maxWidth: {
        maxWidth: 345,
    },
    media: {
        height: 300,
        backgroundSize: 'auto'
    },
    media2: {
        height: 140
    }
});


const LinkItem = () => {
    const classes = useStyles();
    const [data, setData] = useState([
        {
            title: 'Bodycon',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg',
            price: '1100$',
            id: 73
        },
        {
            title: 'Royals Pink',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
            price: '1200$',
            id: 72
        },
        {
            title: 'Dutchess',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg',
            price: "1200$",
            id: 71
        },
        {
            title: 'Bodycon',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg',
            price: '1100$',
            id: 70
        },
        {
            title: 'Royals Pink',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg',
            price: '1200$',
            id: 69
        },
        {
            title: 'Dutchess',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg',
            price: "1200$",
            id: 68
        },
        {
            title: 'Bodycon',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg',
            price: '1100$',
            id: 67
        },
        {
            title: 'Royals Pink',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg',
            price: '1200$',
            id: 66
        },
        {
            title: 'Dutchess',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
            price: "1200$",
            id: 65
        }
    ])

    return (
        <MainContent>
            <Grid container>
                <Grid item xs={12} lg={12} md={12}>
                    <Box component='div' className='bannerColor' display='flex' justifyContent='center' mb={5}>
                        <h3>Product Page</h3>
                    </Box>
                </Grid>
            </Grid>

            <Grid container>
                <Container maxWidth='lg' style={{ display: 'flex' }}>
                    <Grid item xs={6} lg={6} md={6}>
                        <Grid container justify='space-between' mb={4}>
                            <Grid item xs={12} lg={12} md={12}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={data[0].img}
                                            title={data[0].title}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid style={{ marginBottom: '30px', marginTop: '30px' }} item xs={3} lg={3} md={3}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media2}
                                            image={data[0].img}
                                            title={data[0].title}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid style={{ marginBottom: '30px', marginTop: '30px' }} item xs={3} lg={3} md={3}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media2}
                                            image={data[0].img}
                                            title={data[0].title}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid style={{ marginBottom: '30px', marginTop: '30px' }} item xs={3} lg={3} md={3}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media2}
                                            image={data[0].img}
                                            title={data[0].title}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} lg={6} md={6} component={Box} pl={3} mb={5}>

                        <h5 className='noMargin hStyles'>Blue denim shirt</h5>
                        <p className="text-muted">Shirts</p>
                        <ul className="rating">
                            <li>
                                <i className="fas fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="fas fa-star"></i>
                            </li>
                            <li>
                                <i className="far fa-star fa-sm"></i>
                            </li>
                        </ul>
                        <p className="pMargins"><span ><strong>$17.99</strong></span></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                            error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
                            officia quis dolore quos sapiente tempore alias.
                        </p>
                        <BasicTable />
                        <Box component='div' display='flex'>
                            <Counter />
                            <SelectedSize />
                        </Box>
                    </Grid>
                </Container>
            </Grid>

        </MainContent>
    )
}

export default LinkItem;