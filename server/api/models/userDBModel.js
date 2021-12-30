'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDBSchema = new Schema ({
    entry: {
        type: String
    },
    score: {
        type: Number
        //Should restrict to a number between 1-10
    },
    status: {
        type: [{
            type: String,
            enum: ['Playing', 'Finished', 'Completed', 'Paused', 'Dropped', 'Wishlisted']
        }]
    }
});

module.exports = mongoose.model('userDB', userDBSchema);