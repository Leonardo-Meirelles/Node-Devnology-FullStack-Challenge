const express = require('express');
const cors = require('cors');
const routers = require('./routers/routers');

const api = express();
api.use(express.json());
api.use(cors());

const router = express.Router();
routers(api, router);

const port = process.env.PORT || 5000
api.listen(port);