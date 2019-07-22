// src/SBR_BarChart.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
    Line, LineChart, Legend, ResponsiveContainer, PieChart, Pie, Bar,
    BarChart, Sector, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis,
    PolarRadiusAxis, ComposedChart, RadialBarChart, RadialBar,
    ScatterChart, Scatter, Treemap, ReferenceLine } from 'recharts'

import SimpleDateAxisTick from './SimpleDateAxisTick';

import DateUtil from './DateUtil';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
    },
});

class SBR_BarChart extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            // Chart scaling
            left : 0,
            right : 0,
            animation: true,
        }
    }

    render () {
        const { classes, theme } = this.props;
        const { data, xAxisDataKey, barDataKey, barName, barColor } = this.props;

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
                        formatter={(value) => {return value.toFixed(0)}}/>
                    <Legend />
                    <ReferenceLine y={0} stroke='#000'/>
                    <Bar
                        dataKey={barDataKey}
                        name={barName}
                        fill={barColor}/>
                </BarChart>
            </ResponsiveContainer>
        )
    }
}

SBR_BarChart.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SBR_BarChart);
