// src/SBR_AreaChart.js

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

const getPercent = (value, total) => {
	const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
	return `${(decimal * 100).toFixed(fixed)}%`;
};

class SBR_AreaChart extends React.Component {
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
        const { data, xAxisDataKey, areaAttrArray } = this.props;

        return (
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    stackOffset="expand"
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    <XAxis dataKey={xAxisDataKey}/>
                    <YAxis tickFormatter={toPercent}/>
                    <Tooltip />
                    {areaAttrArray.map((areaAttr, index) => {
                        return (
                            <Area
                                key={areaAttr.dataKey}
                                type={areaAttr.type}
                                dataKey={areaAttr.dataKey}
                                stackId={areaAttr.stackId}
                                stroke={areaAttr.stroke}
                                fill={areaAttr.fill} />
                        )
                    })}
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}

SBR_AreaChart.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SBR_AreaChart);
