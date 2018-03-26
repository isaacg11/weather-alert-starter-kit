
// MODULE IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const CronJob = require('cron').CronJob; 
const twilio = require('twilio');
const accountSid = 'ACCT_SID';
const authToken = 'AUTH_TOKEN';
const client = new twilio(accountSid, authToken);
const app = express();

// SERVER CONFIG
app.listen(3000);