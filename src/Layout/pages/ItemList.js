import React from 'react'
import MainContent from '../layouts/MainContent'
import Grid from '@material-ui/core/Grid';
import Card from '../layouts/Card'
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Label from '../layouts/Label';

const ItemList = () => {
    const [data,setData] = useState([
        {
            title:'Bodycon',
            img:'https://static.lichi.com/product/39864/c2ed2b4bd1c8e1ca25cd0525b74dc37d.jpg?v=0_3905395&resize=size-middle',
            price:'1100$'
        },
        {
            title:'Royals Pink',
            img:'https://static.lichi.com/product/40160/ddd5633e33aaf1a18508df3aa0d8d4c0.jpg?v=0_40160.0&resize=size-middle',
            price:'1200$'
        },
        {
            title:'Dutchess',
            img:'https://cdn.shopify.com/s/files/1/0285/9001/4596/products/SHEIKE_030221_S155_4093_1150x.jpg?v=1616974711',
            price:"1200$"
        },
        {
            title:'Bodycon',
            img:'https://static.lichi.com/product/39864/c2ed2b4bd1c8e1ca25cd0525b74dc37d.jpg?v=0_3905395&resize=size-middle',
            price:'1100$'
        },
        {
            title:'Royals Pink',
            img:'https://static.lichi.com/product/40160/ddd5633e33aaf1a18508df3aa0d8d4c0.jpg?v=0_40160.0&resize=size-middle',
            price:'1200$'
        },
        {
            title:'Dutchess',
            img:'https://cdn.shopify.com/s/files/1/0285/9001/4596/products/SHEIKE_030221_S155_4093_1150x.jpg?v=1616974711',
            price:"1200$"
        },
        {
            title:'Bodycon',
            img:'https://static.lichi.com/product/39864/c2ed2b4bd1c8e1ca25cd0525b74dc37d.jpg?v=0_3905395&resize=size-middle',
            price:'1100$'
        },
        {
            title:'Royals Pink',
            img:'https://static.lichi.com/product/40160/ddd5633e33aaf1a18508df3aa0d8d4c0.jpg?v=0_40160.0&resize=size-middle',
            price:'1200$'
        },
        {
            title:'Dutchess',
            img:'https://cdn.shopify.com/s/files/1/0285/9001/4596/products/SHEIKE_030221_S155_4093_1150x.jpg?v=1616974711',
            price:"1200$"
        }
    ])

    return (
        <MainContent>
            <Grid container >
                <Grid item xs={4}>
                    <Sidebar />
                </Grid>
                <Grid item xs={8}>
                    <Grid container>
                        <Label />
                        {data.map(el => (
                            <Grid item xs={4}>
                                <Card data={el}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </MainContent>
    )
}

export default ItemList;