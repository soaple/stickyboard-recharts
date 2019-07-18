// src/DateAxisTick.js

import React from 'react';

import Moment from 'moment-timezone';

class DateAxisTick extends React.Component {

    render() {
        const { x, y, stroke, payload } = this.props;
        const date = Moment(new Date(payload.value));

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
                    {date.format('YYYY-MM-DD')}
                </text>
                <text x={0} y={0} dy={32} textAnchor="end" fill="#666" transform="rotate(-35)">
                    {date.format('HH:mm')}
                </text>
            </g>
        )
    }

}

export default DateAxisTick;
