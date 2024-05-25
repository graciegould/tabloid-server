
const {
    router,
    CODES,
    responses,
    transaction,
    validateInputs
} = require('../utils/import-maps.js').requestModules;

const {Users, Streams} = require('../models/models.js');

router.get('/', async function async(req, res) {
    res.json(await Users.find());
});

router.post('/new-user', async(req, res)  => {
    const inputs = req.body;
    const tests = {
        username: {
            'test' : async(input, inputs) => {
                if(input == '' || input == null) return 'Username is required.';
                let user = await Users.findOne({username: input})
                if(user) return 'Username already exists.';
            },
            'none': 'Username is required.',
        }
    };
   
    try {
        let validation = await validateInputs(inputs, tests);
        if (!validation.passed) {
            return res.status(CODES.UNAUTHORIZED).json(validation);
        }
    
        const streams = await Streams.find();
    
        let data = await transaction(async() => {
            const user = await new Users({ username: req.body.username }).save();
            return {user, streams};
        });
        return res.status(CODES.CREATED).json(data);       
    } catch (error) {
        return responses.internalServerError(res, error);
    }
});


module.exports = router;
