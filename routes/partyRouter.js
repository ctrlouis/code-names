"use strict";


import express from 'express';
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('party.html.pug', {
        title: "Code-names - Party"
    });
});


export default router;
