// src/SBR_PieChart.js

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

class SBR_PieChart extends React.Component {
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
        const { data, colorArray } = this.props;

        return (
            <ResponsiveContainer>
                <PieChart onMouseEnter={this.onPieEnter}
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    <Pie
                        data={data}
                        dataKey={'value'}
                        cx={'50%'}
                        cy={'50%'}
                        labelLine={false}
                        outerRadius={'80%'}
                        fill="#777777">
                            {data.map((entry, index) => <Cell key={index} fill={colorArray[index % colorArray.length]}/>)}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        )
    }
}

SBR_PieChart.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SBR_PieChart);
