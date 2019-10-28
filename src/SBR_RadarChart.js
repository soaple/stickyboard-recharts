// src/SBR_RadarChart.js

import React from 'react';
import PropTypes from 'prop-types';

import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
    Line, LineChart, Legend, ResponsiveContainer, PieChart, Pie, Bar,
    BarChart, Sector, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis,
    PolarRadiusAxis, ComposedChart, RadialBarChart, RadialBar,
    ScatterChart, Scatter, Treemap, ReferenceLine } from 'recharts'

import SimpleDateAxisTick from './SimpleDateAxisTick';

import DateUtil from './DateUtil';

class SBR_RadarChart extends React.Component {
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
        const { data, polarAngleAxisKey, radarAttrArray } = this.props;

        return (
            <ResponsiveContainer>
                <RadarChart cx={'50%'} cy={'50%'} outerRadius={'80%'} data={data}
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    {radarAttrArray.map((radarAttr, index) => {
                        return (
                            <Radar
                                key={radarAttr.dataKey}
                                name={radarAttr.name}
                                dataKey={radarAttr.dataKey}
                                stroke={radarAttr.stroke}
                                fill={radarAttr.fill}
                                fillOpacity={0.8} />
                        )
                    })}
                    <PolarGrid />
                    <Legend />
                    <PolarAngleAxis dataKey={polarAngleAxisKey} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                </RadarChart>
            </ResponsiveContainer>
        )
    }
}

SBR_RadarChart.propTypes = {};

export default SBR_RadarChart;
