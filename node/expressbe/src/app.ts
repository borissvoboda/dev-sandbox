// const express = require('express'); //no autocomplete!
import express from 'express'; // ES modules in browsers

import todoRoutes from './routers/todos';

const app = express();

app.listen(3000);
