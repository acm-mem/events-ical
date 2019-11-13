const express = require('express');
const ical2json = require("ical2json");
const request = require('request');
const calendarURL = 'http://p24-caldav.icloud.com/published/2/MTAwMzIwMTY3NDEwMDMyMFN7SAvlTKdkhJgXkNtZy-JgymLj6bA4VQVtoQYUQCw8Yvc5KubH6TwYoMlCwfK_EBYL1d5Gdd1-W3CRIHQQv7Q'
const app = express();

app.listen(3000);
app.use('/', function (req, res) {
   request('')
   res.send('yes');
});

