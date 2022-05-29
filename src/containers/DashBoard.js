import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import Grid from '@mui/material/Grid';
import BarChart1 from './BarChart1';
import BarChart2 from './BarChart2';
import PieChart1 from './PieChart1'




const DashBoard = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className='split left'>

                <Grid container spacing={3}>
                    <Grid item xs={2.9} >
                        <Item style={{ backgroundColor: "#FFC433", color: "white" }}>
                            <p>Critical Shipments</p>
                            <h1>5</h1>
                        </Item>
                    </Grid>
                    <Grid item xs={2.9}>
                        <Item style={{ backgroundColor: "red", color: "white" }}>
                            <p>Shipment Delays</p>
                            <h1>8</h1>
                        </Item>
                    </Grid>
                    <Grid item xs={2.9}>
                        <Item style={{ backgroundColor: "#13CD65", color: "white" }}>
                            <p>This Week Loading</p>
                            <h1>12</h1>
                        </Item>
                    </Grid>
                    <Grid item xs={2.9}>
                        <Item style={{ backgroundColor: "#FFC433", color: "white" }}>
                            <p>Pending Proforma</p>
                            <h1>15</h1>
                        </Item>
                    </Grid>
                    <Grid item xs={5.8}>
                        <Item style={{ backgroundColor: "#13CD65", color: "white" }}>
                            <p>Shipped Qty</p>
                            <h1>288,800 Kgs</h1>
                        </Item>
                    </Grid>
                    <Grid item xs={5.8}>
                        <Item style={{ backgroundColor: "#05D8DB", color: "white" }}>
                            <p>To be shipped qty</p>
                            <h1>135,000 Kgs	</h1>
                        </Item>
                    </Grid>
                    <Grid item xs={11.6}>
                        <Item>
                            <BarChart1 />
                            <br />
                        </Item>
                    </Grid>
                </Grid>
            </div>

            <div class="split right" >
                <Grid container spacing={3}>
                    <Grid item xs={5.8}>
                        <Item style={{ marginLeft: "10px", marginBottom: "10px" }}>
                            <PieChart1 />
                            <br />
                            <br />
                            <br />
                        </Item>
                    </Grid>
                    <Grid item xs={5.8}>
                        <Item style={{alignItem:'left'}}>
                            <h2>Sales Performance</h2>
                            <p>Year  : 2022</p>
                            <p>Month : Mar</p>
                            <p>Sales Value : LKR 25 Mn</p>
                            <p>Sales Quantity : 350,000 Kgs</p>
                        </Item>
                    </Grid>
                    <Grid item xs={5.8}>
                        <Item style={{ margin: "10px",backgroundColor: "rgb(137 200 13)", color: "white" }}>
                            <p>Year to date Qty	</p>
                            <h1>1,288,800 Kgs</h1>
                        </Item>
                        <Item style={{ margin: "10px",backgroundColor: "#F800DA", color: "white" }}>
                            <p>Year to date Revenue	</p>
                            <h1>USD 3.5 Mn</h1>
                        </Item>
                    </Grid>
                    <Grid item xs={5.8}>
                        <Item>
                            <BarChart2 />

                        </Item>
                    </Grid>

                </Grid>
            </div>




        </Box >
    );

}

export default DashBoard;