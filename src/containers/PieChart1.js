import React, { useState, useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'

const PieChart1 = () => {
    const series = [75000, 60000, 45000, 25000, 20000, 15000, 12000, 10000]
    const options = {
        chart: {
            width: 380,
            type: 'pie',
          },
        labels: ['Miad', 'Impra Russ', 'ELM Stock', 'GEE DEE', 'ABC', 'AAA', 'BBB', 'CCC'],
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
          legend: {
            position: 'left',
            horizontalAlign:'left',
            
          }
    }

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="pie" width={350} height={500}/>
        </div>
    );
}
export default PieChart1;
