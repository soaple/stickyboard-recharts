// src/SBR_ComposedChart.js

import React from 'react';
import PropTypes from 'prop-types';

import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
    Line, LineChart, Legend, ResponsiveContainer, PieChart, Pie, Bar,
    BarChart, Sector, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis,
    PolarRadiusAxis, ComposedChart, RadialBarChart, RadialBar,
    ScatterChart, Scatter, Treemap, ReferenceLine } from 'recharts'

import SimpleDateAxisTick from './SimpleDateAxisTick';

import DateUtil from './DateUtil';

class SBR_ComposedChart extends React.Component {
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
        const {
            data,
            xAxisDataKey,
            precision,
            barDataKey,
            barName,
            barColor,
            lineType,
            lineDataKey,
            lineName,
            lineColor,
        } = this.props;

        return (
            <ResponsiveContainer>
                <ComposedChart
                    data={data}
                    margin={{top: 20, right: 30, left: 10, bottom: 20}}>
                    <XAxis
                        dataKey={xAxisDataKey}
                        tickCount={10}
                        tick={<SimpleDateAxisTick />}/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip
                        labelFormatter={(label) => { return DateUtil.formatDateOnly(label) }}
                        formatter={(value) => {return value.toFixed(precision || 0)}}/>
                    <Legend />
                    <ReferenceLine y={0} stroke='#000'/>
                    <Bar
                        dataKey={barDataKey}
                        name={barName}
                        fill={barColor}/>
                    <Line
                        type={lineType}
                        dataKey={lineDataKey}
                        name={lineName}
                        unit={''}
                        stroke={lineColor}
                        strokeWidth={2}
                        dot={true}
                        activeDot={{r: 6}} />
                </ComposedChart>
            </ResponsiveContainer>
        )
    }
}

SBR_ComposedChart.propTypes = {};

export default SBR_ComposedChart;
