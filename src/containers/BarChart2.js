import React, { useState, useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'

const BarChart2 = () => {

    // const series = [{
    //     data: [88000, 10000, 12000, 15000, 20000, 25000, 45000, 60000, 75000]
    // }];
    // const options = {
    //     chart: {
    //         type: 'bar',
    //         height: 300
    //     },
    //     plotOptions: {
    //         bar: {
    //             borderRadius: 4,
    //             horizontal: true,
    //         }
    //     },
    //     dataLabels: {
    //         enabled: false
    //     },
    //     xaxis: {
    // categories: ['Others', 'CCC', 'BBB', 'AAA', 'ABC', 'GEE DEE', 'ELMSTOCK',
    //     'IMPRA RUSS', 'MIAD'
    // ],
    //     }
    // };

    const series = [{
        data: [88000, 10000, 12000, 15000, 20000, 25000, 45000, 60000, 75000]
    }];
    const options = {
        chart: {
            type: 'bar',
            height: 350
        },
        annotations: {
            xaxis: [{
                x: 500,
                borderColor: '#00E396',
                label: {
                    borderColor: '#00E396',
                    style: {
                        color: '#fff',
                        background: '#00E396',
                    },
                    text: '',
                }
            }],
            yaxis: [{
                y: 'July',
                y2: 'September',
                label: {
                    text: ''
                }
            }]
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true
        },
        xaxis: {
            categories: ['Others', 'CCC', 'BBB', 'AAA', 'ABC', 'GEE DEE', 'ELMSTOCK',
                'IMPRA RUSS', 'MIAD'
            ],
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        yaxis: {
            reversed: false,
            // axisTicks: {
            //     show: true
            // }
        }
    };

    return (
        <div id="chart" >
            <ReactApexChart options={options} series={series} type="bar" height={300} />
        </div >
    );




}


export default BarChart2;
