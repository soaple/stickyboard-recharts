// src/DateUtil.js

import Moment from 'moment-timezone';

var DateUtil = {

    formatDateOnly: (label) => {
        return Moment(new Date(label)).format('YYYY-MM-DD');
    },

}

module.exports = DateUtil;
