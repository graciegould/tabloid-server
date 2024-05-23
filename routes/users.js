const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');
const Streams = require('../models/streams.js');

router.get('/', async function (req, res) {
    res.json(await Users.find());
});

router.post('/new-user', async function (req, res) {
    function validate(input) {
        if (!input.username) {
            return {
                passed: false,
                code: 400,
                message: 'Username is required.'
            }
        }
        let newUser = Users.findOne({username:input.username});
        if(!newUser){
            return {
                passed: false,
                code: 400,
                  errors: {
                    username: 'Username already exists.'
                }
            }
        }
        return {
            code: 201,
            passed: true,
            data: {
                username: input.username,
                streams: input.streams
            }
        }
    }

    async function response (validation) {
        const newUser = new Users({username:validation.data.username}).save();
        const streams = await Streams.find();
        return {
            user: newUser,
            streams: streams
        }
    }

    try {
        let validation = validate(req.body);
        if (!validation.passed) {
            return res.status(validation.code).json(validation);
        }
        const data = await response(validation);
        return res.status(validation.code).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
