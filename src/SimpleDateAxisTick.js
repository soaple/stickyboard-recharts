// src/SimpleDateAxisTick.js

import React from 'react';

import Moment from 'moment-timezone';

class SimpleDateAxisTick extends React.Component {

    render() {
        const { x, y, textAnchor, verticalAnchor, stroke, payload } = this.props;
        const date = Moment(new Date(payload.value));

        return (
            <g transform={`translate(${x},${y})`}>
                {date.isValid() &&
                    <text
                        x={0} y={0} dx={0} dy={16}
                        textAnchor={textAnchor}
                        fill="#666" transform="rotate(0)">
                        {date.format('MM-DD')}
                    </text>}
            </g>
        )
    }

}

export default SimpleDateAxisTick;
