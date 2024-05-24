const express = require('express');
const router = express.Router();

const Streams = require('../models/streams.js');


router.post('/stream/:id', async function (req, res) {
    try {
        const { user } = req.body;
        const id = req.params.id;
        const stream = await Streams.findById(id);
        if (!stream) {
            return res.status(404).json({ message: 'Stream not found' });
        }
        res.status(201).json({ 
            stream: stream
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// router.delete('/:id', async function (req, res) {
//     try {
//         const stream = await Streams.findByIdAndDelete(req.params.id);
//         if (!stream) {
//             return res.status(404).json({ message: 'Stream not found' });
//         }
//         res.json({ message: 'Stream deleted successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });



module.exports = router;
