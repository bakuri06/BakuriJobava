import React from 'react'
import MainContent from '../Layout/layouts/MainContent';
import Grid from '@material-ui/core/Grid';
import Card from '../Layout/layouts/Card'
import { useState } from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import Label from '../Layout/layouts/Label';
import { Container } from '@material-ui/core';
import Image from '../Layout/Header/Image';

const ItemList = () => {
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
            <Image />
            <Container maxWidth='lg'>
                <Grid container md>
                    <Grid item xs={4} md={4} sm={4}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={8} md={8} sm={12} mt={5} component='Box'>
                        <Grid container>
                            <Label />
                            {data.map(el => (
                                <Grid item xs={4} md={4} sm={6} mb={5} component='Box'>
                                    <Card data={el} />
                                </Grid>
                            ))}
                            <Label />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </MainContent>
    )
}

export default ItemList;