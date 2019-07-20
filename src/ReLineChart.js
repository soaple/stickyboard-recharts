// src/ReLineChart.js

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

class ReLineChart extends React.Component {
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
        const { data, lineColor } = this.props;

        return (
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{top: 20, right: 30, left: 10, bottom: 20}}>
                    <XAxis
                        dataKey='time'
                        padding={{left: this.state.left, right: this.state.right}}
                        domain={['dataMin -5', 'dataMax + 5']}
                        type='number'
                        tickCount={10}
                        tick={<SimpleDateAxisTick />}/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip
                        labelFormatter={(label) => { return DateUtil.formatDateOnly(label) }}
                        formatter={(value) => {return value.toFixed(0)}}/>
                    <Legend />
                    <ReferenceLine y={0} stroke='#000'/>
                    <Line
                        type="linear"
                        dataKey="visitors"
                        name={'Visitors'}
                        unit={''}
                        stroke={lineColor}
                        strokeWidth={2}
                        dot={false}
                        activeDot={{r: 6}} />}
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

ReLineChart.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ReLineChart);
