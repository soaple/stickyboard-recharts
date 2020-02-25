// src/SBR_StackedBarChart.js

import React from 'react';
import PropTypes from 'prop-types';

import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
    Line, LineChart, Legend, ResponsiveContainer, PieChart, Pie, Bar,
    BarChart, Sector, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis,
    PolarRadiusAxis, ComposedChart, RadialBarChart, RadialBar,
    ScatterChart, Scatter, Treemap, ReferenceLine, LabelList } from 'recharts'

import SimpleDateAxisTick from './SimpleDateAxisTick';

import DateUtil from './DateUtil';

class SBR_StackedBarChart extends React.Component {
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
            showBarLabel,
            showTotalSumLabel,
            precision,
            xAxisDataKey,
            barDataArray,
        } = this.props;

        const barDataKeys = barDataArray.map(item => item.key);

        return (
            <ResponsiveContainer>
                <BarChart
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
                        formatter={(value) => {return value.toFixed(precision || 0)}}/>
                    <Legend />
                    <ReferenceLine y={0} stroke='#000'/>

                    {barDataArray.map((barData, index) => {
                        const isLastItem = barDataArray.length - 1 === index;

                        return (
                            <Bar
                                key={index}
                                stackId="a"
                                dataKey={barData.key}
                                name={barData.name}
                                fill={barData.color}>
                                {showBarLabel &&
                                    <LabelList
                                        position="center"
                                        valueAccessor={entry => {
                                            let totalSum = 0;
                                            barDataKeys.forEach((key) => {
                                                totalSum += entry[key];
                                            });

                                            if (totalSum > 0) {
                                                return `${(entry[barData.key] / totalSum * 100).toFixed(0)}%`;
                                            } else {
                                                return '';
                                            }
                                        }} />}
                                {showTotalSumLabel && isLastItem &&
                                    <LabelList
                                        position="top"
                                        valueAccessor={entry => {
                                            let totalSum = 0;
                                            barDataKeys.forEach((key) => {
                                                totalSum += entry[key];
                                            });
                                            return totalSum > 0 ? totalSum : '';
                                        }} />}
                            </Bar>
                        );
                    })}
                </BarChart>
            </ResponsiveContainer>
        )
    }
}

SBR_StackedBarChart.propTypes = {};

export default SBR_StackedBarChart;
