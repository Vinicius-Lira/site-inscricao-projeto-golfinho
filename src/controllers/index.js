'use strict';
// https://sequelize.org/master/manual/getting-started.html
const express = require('express');
const router = express.Router();
var path = require('path');

exports.campeche = (req, res, next) => {
    res.sendFile(path.resolve('public/campeche.html'));
}

exports.aabb = (req, res, next) => {
    res.sendFile(path.resolve('public/aabb.html'));
}

exports.crc = (req, res, next) => {
    res.sendFile(path.resolve('public/crc.html'));
}

exports.industrial = (req, res, next) => {
    res.sendFile(path.resolve('public/industrial.html'));
}