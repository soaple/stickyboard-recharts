// src/SBR_LineChart.js

import React from 'react';
import PropTypes from 'prop-types';

import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
    Line, LineChart, Legend, ResponsiveContainer, PieChart, Pie, Bar,
    BarChart, Sector, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis,
    PolarRadiusAxis, ComposedChart, RadialBarChart, RadialBar,
    ScatterChart, Scatter, Treemap, ReferenceLine } from 'recharts'

import SimpleDateAxisTick from './SimpleDateAxisTick';

import DateUtil from './DateUtil';

class SBR_LineChart extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            // Chart scaling
            left : 0,
            right : 0,
            animation: true,
        }
    }

    render() {
        const { data, xAxisDataKey, lineType, lineDataKey, lineName, lineColor } = this.props;

        return (
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{top: 20, right: 30, left: 10, bottom: 20}}>
                    {xAxisDataKey &&
                        <XAxis
                            dataKey={xAxisDataKey}
                            tickCount={10}
                            tick={<SimpleDateAxisTick />}/>}
                    {xAxisDataKey &&
                        <YAxis/>}
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip
                        labelFormatter={(label) => { return DateUtil.formatDateOnly(label) }}
                        formatter={(value) => {return value.toFixed(0)}}/>
                    <Legend />
                    <ReferenceLine y={0} stroke='#000'/>
                    <Line
                        type={lineType}
                        dataKey={lineDataKey}
                        name={lineName}
                        unit={''}
                        stroke={lineColor}
                        strokeWidth={2}
                        dot={false}
                        activeDot={{r: 6}} />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

SBR_LineChart.propTypes = {};

export default SBR_LineChart;
