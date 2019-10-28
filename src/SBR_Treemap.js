// src/SBR_Treemap.js

import React from 'react';
import PropTypes from 'prop-types';

import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
    Line, LineChart, Legend, ResponsiveContainer, PieChart, Pie, Bar,
    BarChart, Sector, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis,
    PolarRadiusAxis, ComposedChart, RadialBarChart, RadialBar,
    ScatterChart, Scatter, Treemap, ReferenceLine } from 'recharts'

import SimpleDateAxisTick from './SimpleDateAxisTick';

import DateUtil from './DateUtil';

class SBR_Treemap extends React.Component {
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
        const { attrs, colorArray } = this.props;

        return (
            <ResponsiveContainer>
                <Treemap
                    {...this.props}
                    content={<CustomizedTreeMapContent colors={colorArray}/>} />
            </ResponsiveContainer>
        )
    }
}

const CustomizedTreeMapContent = (props) => {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = props;

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: depth < 2 ? colors[Math.floor(index / root.children.length * 6)] : 'none',
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
            />
            {
                depth === 1 ?
                <text
                x={x + width / 2}
                y={y + height / 2 + 7}
                textAnchor="middle"
                fill="#fff"
                fontSize={14}
                >
                {name}
                </text>
                : null
            }
            {
                depth === 1 ?
                <text
                x={x + 4}
                y={y + 18}
                fill="#fff"
                fontSize={16}
                fillOpacity={0.9}
                >
                {index + 1}
                </text>
                : null
            }
        </g>
    );
}

SBR_Treemap.propTypes = {};

export default SBR_Treemap;
