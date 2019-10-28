// src/SBR_ScatterChart.js

import React from 'react';
import PropTypes from 'prop-types';

import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
    Line, LineChart, Legend, ResponsiveContainer, PieChart, Pie, Bar,
    BarChart, Sector, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis,
    PolarRadiusAxis, ComposedChart, RadialBarChart, RadialBar,
    ScatterChart, Scatter, Treemap, ReferenceLine } from 'recharts'

import SimpleDateAxisTick from './SimpleDateAxisTick';

import DateUtil from './DateUtil';

class SBR_ScatterChart extends React.Component {
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
        const { data, xAxisAttr, yAxisAttr, scatterName, scatterColor } = this.props;

        return (
            <ResponsiveContainer>
                <ScatterChart
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    <CartesianGrid />
                    <XAxis {...xAxisAttr} />
                    <YAxis {...yAxisAttr} />
                    <Scatter
                        data={data}
                        name={scatterName}
                        fill={scatterColor} />
                    <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                </ScatterChart>
            </ResponsiveContainer>
        )
    }
}

SBR_ScatterChart.propTypes = {};

export default SBR_ScatterChart;
